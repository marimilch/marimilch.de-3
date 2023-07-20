<script lang="ts" setup>
import { PIXEL_SIZE } from "~/ts/globals";
import { wait } from "~/ts/helpers";

const ratio = ref(0);
const ratioPercentage = computed(() => ratio.value + "%");
const props = defineProps<{ trigger: boolean }>();
const trigger = computed(() => props.trigger);
const color1 = ref("rgb(var(--color-purple-100))");
const color2 = ref("transparent");
const FRAME_DELAY = 75;

watch(trigger, async () => {
  for (let i = 0; i < 2; ++i) {
    ratio.value = 25;
    await wait(FRAME_DELAY);
    ratio.value = 50;
    await wait(FRAME_DELAY);
    ratio.value = 75;
    await wait(FRAME_DELAY);
    ratio.value = 100;
    await wait(FRAME_DELAY);
    swapColors();
    ratio.value = 0;
  }
});

function swapColors() {
  const swap = color1.value;
  color1.value = color2.value;
  color2.value = swap;
}
</script>

<template>
  <OnPixelGrid
    class="fixed top-0 left-0 w-full h-screen overlay z-10 pointer-events-none"
  ></OnPixelGrid>
</template>

<style scoped>
.overlay {
  background: linear-gradient(
    to bottom,
    v-bind(color1),
    v-bind(color1) v-bind(ratioPercentage),
    v-bind(color2) v-bind(ratioPercentage),
    v-bind(color2)
  );
  background-size: 100% calc(v-bind(PIXEL_SIZE) * 4);
}
</style>
