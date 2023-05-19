<script lang="ts" setup>
import { SpriteSrc } from "~/ts/globals";

const props = defineProps<{ src: SpriteSrc; width: number; height: number }>();

const style = useSpriteStyle({
  spriteSrc: props.src,
  width: props.width,
  height: props.height,
  mapHeight: 1,
  mapWidth: 1,
});
</script>

<template>
  <div :style="style" style="image-rendering: pixelated" />
</template>
