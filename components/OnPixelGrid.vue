<script lang="ts" setup>
import { useElementBounding } from "@vueuse/core";
import { onPixelGrid } from "~/ts/helpers";

const wrap = ref<HTMLDivElement | null>(null);
const rect = useElementBounding(wrap);
const pixelGridPosition = computed(() => ({
  top: onPixelGrid(rect.top.value),
  left: onPixelGrid(rect.left.value),
}));
const delta = computed(() => ({
  top: pixelGridPosition.value.top - rect.top.value,
  left: pixelGridPosition.value.left - rect.left.value,
}));

type OnPixelGridProps = {
  childClass?: string | Array<string> | Record<string, boolean>;
};

const props = withDefaults(defineProps<OnPixelGridProps>(), { childClass: "" });
</script>

<template>
  <div ref="wrap">
    <div
      :style="{
        transform: `translate(${delta.left}px, ${delta.top}px) `,
      }"
      :class="props.childClass"
    >
      <slot />
    </div>
  </div>
</template>
