<script lang="ts" setup>
import * as THREE from "three";
import { OnEnterFrameData, OnInitData } from "~/ts/helpers";

const SPEED_MAX = 30;
const XZ_SCALE_FACTOR_MAX = 1.125;
const SPEEDING_DURATION = 500;
const SPEED_ACCELERATION = 0.75;

const threeCanvas = ref<HTMLElement | undefined>(undefined);
let distanceToMidYFraction: ComputedRef<number> | null = null;
const speedFactor = ref(1);
const xzScaleFactor = ref(1);
const isSpeeding = ref(false);
const dtLocal = ref(0);

function clamp(
  value: number,
  from: number,
  to: number,
  easing: (value: number) => number = easeInOutBack
) {
  return from + easing(value) * (to - from);
}

function easeInOutBack(value: number): number {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;

  return value < 0.5
    ? (Math.pow(2 * value, 2) * ((c2 + 1) * 2 * value - c2)) / 2
    : (Math.pow(2 * value - 2, 2) * ((c2 + 1) * (value * 2 - 2) + c2) + 2) / 2;
}

function shortSpeedUp() {
  isSpeeding.value = true;

  setTimeout(() => {
    isSpeeding.value = false;
  }, SPEEDING_DURATION);
}

onMounted(() => {
  const { distanceToMidYFraction: y } = useDistanceToMidScroll(threeCanvas);
  distanceToMidYFraction = y;
});

const onInit = ({ camera }: OnInitData) => {
  const geometry = new THREE.DodecahedronGeometry(3);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x += 0.5;
  camera.position.z = 10;

  return mesh;
};

const onEnterFrame = ({ mesh, dt }: OnEnterFrameData) => {
  const direction = isSpeeding.value ? 1 : -1;
  dtLocal.value += direction * dt * SPEED_ACCELERATION;
  dtLocal.value = Math.min(Math.max(dtLocal.value, 0), SPEEDING_DURATION);

  const dtLocalFraction = dtLocal.value / SPEEDING_DURATION;

  speedFactor.value = clamp(dtLocalFraction, 1, SPEED_MAX);
  xzScaleFactor.value = clamp(dtLocalFraction, 1, XZ_SCALE_FACTOR_MAX);
  const safeDistanceToMidYFraction = distanceToMidYFraction
    ? distanceToMidYFraction.value
    : 0;
  mesh.rotation.x = -safeDistanceToMidYFraction * 0.75;
  mesh.rotation.y += ((0.5 * dt) / 1000) * speedFactor.value;
  mesh.scale.x = xzScaleFactor.value;
  mesh.scale.y = 1 / xzScaleFactor.value;
  mesh.scale.z = xzScaleFactor.value;
};
</script>

<template>
  <div class="h-[300vh] flex items-center w-full">
    <PixelThree
      ref="threeCanvas"
      class="w-full h-[50vmax] cursor-pointer"
      :on-enter-frame="onEnterFrame"
      :on-init="onInit"
      @click="shortSpeedUp"
    />
  </div>
</template>
