<script lang="ts" setup>
import ButtonSprite from "~/assets/images/sprites/button.png";

const emit = defineEmits(["up", "down"]);
const button = ref<HTMLDivElement | null>(null);
const { wrapStyle, contentStyle } = useButtonLikeStyle({
  spriteSrc: ButtonSprite,
  width: 39,
  height: 13,
  button,
  emit,
});
</script>

<template>
  <OnPixelGrid>
    <div
      ref="button"
      class="button cursor-pointer flex justify-center p-2"
      :style="wrapStyle"
      style="image-rendering: pixelated"
    >
      <OnPixelGrid>
        <div class="button-content" :style="contentStyle">
          <slot />
        </div>
      </OnPixelGrid>
    </div>
  </OnPixelGrid>
</template>
