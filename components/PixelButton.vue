<script lang="ts" setup>
import ButtonSprite from "~/assets/images/sprites/button.png";
import { PIXEL_SIZE, PIXEL_SIZE_RENDERED } from "~/ts/globals";
import { wait } from "~/ts/helpers";

const button = ref<HTMLDivElement | null>(null);
const WIDTH = 31;
const HEIGHT = 13;
const SPRITE_DIMENSIONS = {
  x: 3,
  y: 1,
};
const index = reactive({
  x: 0,
  y: 0,
});
const renderedWidth = computed(() => WIDTH * PIXEL_SIZE_RENDERED + "px");
const renderedHeight = computed(() => HEIGHT * PIXEL_SIZE_RENDERED + "px");

onMounted(() => {
  button.value?.addEventListener("click", async () => {
    index.x = 1;
    await wait(30);
    index.x = 2;
    await wait(30);
    index.x = 1;
    await wait(30);
    index.x = 0;
  });
});

const style = computed(() => ({
  width: `calc(${PIXEL_SIZE} * ${WIDTH})`,
  height: `calc(${PIXEL_SIZE} * ${HEIGHT})`,
  backgroundImage: `url(${ButtonSprite})`,
  backgroundPosition: `calc(${-index.x} * ${renderedWidth.value}) calc(${
    index.y
  } * ${renderedHeight.value})`,
  backgroundSize: `${SPRITE_DIMENSIONS.x * WIDTH * PIXEL_SIZE_RENDERED}px ${
    SPRITE_DIMENSIONS.y * HEIGHT * PIXEL_SIZE_RENDERED
  }px`,
}));

const styleButtonContent = computed(() => ({
  transform: `translateY( calc( ${PIXEL_SIZE} * ${index.x} ) )`,
}));
</script>

<template>
  <OnPixelGrid>
    <div
      ref="button"
      class="button cursor-pointer flex justify-center px-1 py-2"
      :style="style"
      style="image-rendering: pixelated"
    >
      <OnPixelGrid>
        <div class="button-content" :style="styleButtonContent">
          <span>About</span>
        </div>
      </OnPixelGrid>
    </div>
  </OnPixelGrid>
</template>
