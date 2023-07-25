<script lang="ts" setup>
import HeaderBack from "~/assets/images/header-back.png";
import HeaderGlass from "~/assets/images/header-glass.png";
import HeaderSun from "~/assets/images/header-sun.png";
import HeaderHorizontalLine from "~/assets/images/header-horizontal-line.png";
import HeaderVerticalLines from "~/assets/images/header-vertical-lines.png";
import { onPixelGrid } from "~/ts/helpers";

const t1 = ref(0);
const t2 = ref(0);
const t3 = ref(0);
const t4 = ref(0.66);
const t5 = ref(1.33);

const wave = computed(() => onPixelGrid(Math.sin(t1.value) * 20));
const wave2 = computed(() => onPixelGrid(Math.sin(t1.value + 90) * 10));
const wave3 = computed(() => onPixelGrid(Math.sin(t2.value) * 10));
const perspectives = computed(() => [
  onPixelGrid(-Math.sqrt(t3.value) * 50),
  onPixelGrid(-Math.sqrt(t4.value) * 50),
  onPixelGrid(-Math.sqrt(t5.value) * 50),
]);

function render() {
  t1.value = (t1.value + 0.02) % (Math.PI * 2);
  t2.value = (t2.value + 0.005) % (Math.PI * 2);
  t3.value = (t3.value + 0.01) % 2;
  t4.value = (t4.value + 0.01) % 2;
  t5.value = (t5.value + 0.01) % 2;
}

function renderCascade() {
  render();
  window.requestAnimationFrame(renderCascade);
}

onMounted(() => {
  renderCascade();
});
</script>

<template>
  <div class="relative">
    <PixelImage
      :src="HeaderBack"
      :width="2"
      :height="53"
      class="w-full"
      content-class="!w-full"
    />
    <div
      class="w-full absolute flex justify-center items-center top-0 left-0 h-44"
    >
      <div :style="`top: ${wave3}px`" class="relative">
        <PixelImage :src="HeaderSun" :width="35" :height="35" />
      </div>
    </div>

    <div class="h-20 top-28 absolute overflow-hidden w-full max-w-3xl">
      <PixelHeaderFloor :camera-distance="15" class="h-full" />
    </div>

    <!-- <div
      class="w-full absolute flex justify-center items-end top-0 left-0 h-44"
    >
      <div>
        <PixelImage :src="HeaderVerticalLines" :width="80" :height="16" />
      </div>
    </div> -->

    <!-- <div
      v-for="(perspective, i) in perspectives"
      :key="i"
      class="w-full absolute flex justify-center items-end top-0 left-0 h-48"
    >
      <div
        :style="`top: ${perspective}px; opacity: ${1 + perspective / 100};`"
        class="relative w-full"
      >
        <PixelImage
          :src="HeaderHorizontalLine"
          :width="1"
          :height="3"
          class="w-full"
          content-class="!w-full"
        />
      </div>
    </div> -->
    <div
      class="w-full absolute flex justify-center items-end top-0 left-0 h-40"
    >
      <div :style="`left: ${wave}px; top: ${wave2}px`" class="relative">
        <PixelImage :src="HeaderGlass" :width="12" :height="29" />
      </div>
    </div>
  </div>
</template>
