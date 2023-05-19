<script lang="ts" setup>
import ButtonSprite from "~/assets/images/sprites/button.png";

const button = ref<HTMLDivElement | null>(null);
const { wrapStyle, contentStyle } = useButtonLikeStyle({
  spriteSrc: ButtonSprite,
  width: 39,
  height: 13,
  button,
});
</script>

<template>
  <OnPixelGrid>
    <div
      ref="button"
      class="button cursor-pointer flex justify-center p-1"
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
