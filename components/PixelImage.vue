<script lang="ts" setup>
import { SpriteSrc } from "~/ts/globals";

const props = defineProps<{
  src: SpriteSrc;
  width: number;
  height: number;
  contentClass?: string | string[] | Record<string, boolean> | undefined;
}>();

const style = useSpriteStyle({
  spriteSrc: props.src,
  width: props.width,
  height: props.height,
  mapHeight: 1,
  mapWidth: 1,
});
</script>

<template>
  <OnPixelGrid>
    <div
      :style="style"
      style="image-rendering: pixelated"
      :class="contentClass"
    />
  </OnPixelGrid>
</template>
