<script lang="ts" setup>
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import * as THREE from "three";
import { OnEnterFrameData, OnInitData } from "~/ts/helpers";

const SPEED_MAX = 30;
const XZ_SCALE_FACTOR_MAX = 1.225;
const SPEEDING_DURATION = 450;
const SPEED_ACCELERATION = 0.75;
const MODEL_TILT_ANGLE_X_MIN = -0.3;
const MODEL_TILT_ANGLE_Z_MIN = 0;
const MODEL_TILT_ANGLE_X_MAX = -0.5;
const MODEL_TILT_ANGLE_Z_MAX = -0.1;

const threeCanvas = ref<HTMLElement | undefined>(undefined);
let distanceToMidYFraction: ComputedRef<number> | null = null;
const speedFactor = ref(1);
const xzScaleFactor = ref(1);
const isSpeeding = ref(false);
const dtLocal = ref(0);

const props = defineProps<{ modelSrc: string; cameraDistance: number }>();

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
  // const geometry = new THREE.DodecahedronGeometry(3);
  const material = new THREE.MeshNormalMaterial({
    // flatShading: true,
  });
  // const mesh = new THREE.Mesh(geometry, material);
  camera.position.z = props.cameraDistance;

  // Instantiate a loader
  const loader = new GLTFLoader();

  // Load a glTF resource
  return new Promise<THREE.Mesh>((resolve, reject) => {
    loader.load(
      // resource URL
      `/models/${props.modelSrc}`,
      // called when the resource is loaded
      function (gltf: GLTFLoader) {
        // scene.add(gltf.scene);
        gltf.scene.traverse((o: any) => {
          if (!o.isMesh) return;

          o.material = material;
        });

        resolve(gltf.scene);
      },
      // called while loading is progressing
      function (xhr: any) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error: any) {
        reject(error);
      }
    );
  });
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
  mesh.rotation.x =
    -safeDistanceToMidYFraction * 0.75 +
    clamp(dtLocalFraction, MODEL_TILT_ANGLE_X_MIN, MODEL_TILT_ANGLE_X_MAX);

  mesh.rotation.z = clamp(
    dtLocalFraction,
    MODEL_TILT_ANGLE_Z_MIN,
    MODEL_TILT_ANGLE_Z_MAX
  );
  mesh.rotation.y += ((0.5 * dt) / 1000) * speedFactor.value;
  mesh.scale.x = xzScaleFactor.value;
  mesh.scale.y = 1 / xzScaleFactor.value;
  mesh.scale.z = xzScaleFactor.value;
};
</script>

<template>
  <div
    class="overflow-visible flex justify-center items-center cursor-pointer"
    @click="shortSpeedUp"
  >
    <PixelThree
      ref="threeCanvas"
      class="w-full h-[min(100vmax,_50rem)] pointer-events-none"
      :on-enter-frame="onEnterFrame"
      :on-init="onInit"
    />
  </div>
</template>
