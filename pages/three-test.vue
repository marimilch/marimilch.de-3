<script lang="ts" setup>
import * as THREE from "three";
import { OnEnterFrameData, OnInitData } from "~/ts/helpers";

const threeCanvas = ref<HTMLElement | undefined>(undefined);
let distanceToMidYFraction: ComputedRef<number> | null = null;

onMounted(() => {
  const { distanceToMidYFraction: y } = useDistanceToMidScroll(threeCanvas);
  distanceToMidYFraction = y;
});

const onEnterFrame = ({ mesh, dt }: OnEnterFrameData) => {
  const safeDistanceToMidYFraction = distanceToMidYFraction
    ? distanceToMidYFraction.value
    : 0;
  mesh.rotation.x = -safeDistanceToMidYFraction * 0.75;
  mesh.rotation.y += (0.5 * dt) / 1000;
};

const onInit = ({ camera }: OnInitData) => {
  const geometry = new THREE.BoxGeometry(5, 5, 5);
  const material = new THREE.MeshMatcapMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x += 0.5;
  camera.position.z = 10;

  return mesh;
};
</script>

<template>
  <div class="h-[300vh] flex items-center w-full">
    <PixelThree
      class="w-full h-96"
      :on-enter-frame="onEnterFrame"
      :on-init="onInit"
      ref="threeCanvas"
    />
  </div>
</template>
