<script lang="ts" setup>
import { useElementBounding } from "@vueuse/core";
import { calcPixelSizeAsNumber, PIXEL_SIZE_RENDERED } from "~/ts/globals";

const wrap = ref<HTMLDivElement | null>(null);
const rect = useElementBounding(wrap);
const pixelGridPosition = computed(() => ({
  top: roundToPixel(rect.top.value),
  left: roundToPixel(rect.left.value),
}));
const delta = computed(() => ({
  top: pixelGridPosition.value.top - rect.top.value,
  left: pixelGridPosition.value.left - rect.left.value,
}));

function roundToPixel(x: number): number {
  calcPixelSizeAsNumber();
  return Math.round(x / PIXEL_SIZE_RENDERED) * PIXEL_SIZE_RENDERED;
}
</script>

<template>
  <div ref="wrap">
    <div
      :style="{
        transform: `translate(${delta.left}px, ${delta.top}px) `,
      }"
    >
      <slot />
    </div>
  </div>
</template>
