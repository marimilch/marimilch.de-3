<script lang="ts" setup>
import { useElementBounding, useElementVisibility } from "@vueuse/core";
import * as THREE from "three";
import { PIXEL_SIZE_RENDERED } from "~/ts/globals";
import { OnEnterFrameData, OnInitData } from "~/ts/helpers";

const canvas = ref<HTMLCanvasElement | undefined>(undefined);
const isVisible = useElementVisibility(canvas);
let renderer: any | null = null;
const { height, width } = useElementBounding(canvas);

interface PixelThreeProps {
  onEnterFrame: (onEnterFrameData: OnEnterFrameData) => Promise<void>;
  onInit: (onInitData: OnInitData) => Promise<THREE.Mesh>;
}

const props = defineProps<PixelThreeProps>();
let lastTimestamp = new Date().getTime();
let currentTimestamp = lastTimestamp;

onMounted(async () => {
  if (canvas === null) return;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    300,
    width.value / height.value,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
  });

  const mesh = await props.onInit({
    camera,
    renderer,
    scene,
  });
  scene.add(mesh);

  await props.onInit({
    camera,
    renderer,
    scene,
  });

  const cascadedOnEnterFrame = async () => {
    lastTimestamp = currentTimestamp;
    currentTimestamp = new Date().getTime();

    if (isVisible.value) {
      await props.onEnterFrame({
        dt: currentTimestamp - lastTimestamp,
        mesh,
        camera,
        renderer,
        scene,
      });
      renderer.render(scene, camera);
    }
    requestAnimationFrame(cascadedOnEnterFrame);
  };

  await cascadedOnEnterFrame();

  watch(
    width,
    (w) => {
      renderer.setSize(
        w / PIXEL_SIZE_RENDERED,
        height.value / PIXEL_SIZE_RENDERED
      );
      camera.aspect = w / height.value;
      camera.updateProjectionMatrix();
    },
    { immediate: true }
  );
  watch(
    height,
    (h) => {
      renderer.setSize(
        width.value / PIXEL_SIZE_RENDERED,
        h / PIXEL_SIZE_RENDERED
      );
      camera.aspect = width.value / h;
      camera.updateProjectionMatrix();
    },
    { immediate: true }
  );
});
</script>

<template>
  <OnPixelGrid child-class="w-full h-full">
    <canvas ref="canvas" class="!w-full !h-full" />
  </OnPixelGrid>
</template>
