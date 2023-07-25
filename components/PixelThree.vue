<script lang="ts" setup>
import { useElementBounding, useElementVisibility } from "@vueuse/core";
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import * as THREE from "three";
import { PIXEL_SIZE_RENDERED } from "~/ts/globals";
import { OnEnterFrameData, OnInitData } from "~/ts/helpers";

const canvas = ref<HTMLCanvasElement | null>(null);
let wasUnmounted = false;
// @todo fix this
const isVisible = ref(true); // useElementVisibility(canvas);
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
  if (canvas === null) {
    return;
  }
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    300,
    width.value / height.value,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value || undefined,
    alpha: true,
  });

  // const composer = new EffectComposer(renderer);
  // const renderPixelatedPass = new RenderPixelatedPass(1, scene, camera);
  // composer.addPass(renderPixelatedPass);

  const mesh = await props.onInit({
    camera,
    renderer,
    // composer,
    scene,
  });
  scene.add(mesh);

  const cascadedOnEnterFrame = async () => {
    if (wasUnmounted) {
      scene.clear();
      renderer.dispose();
      // composer.dispose();
      return;
    }
    lastTimestamp = currentTimestamp;
    currentTimestamp = new Date().getTime();

    if (isVisible.value) {
      await props.onEnterFrame({
        dt: currentTimestamp - lastTimestamp,
        mesh,
        camera,
        renderer,
        // composer,
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

onBeforeUnmount(() => {
  wasUnmounted = true;
});
</script>

<template>
  <OnPixelGrid ref="wrap" child-class="w-full h-full min-h-[1px] min-w-[1px]">
    <canvas ref="canvas" class="!w-full !h-full" />
  </OnPixelGrid>
</template>

<style scoped>
canvas {
  /* all four are needed to support the most browsers */
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
</style>
