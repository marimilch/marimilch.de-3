<script lang="ts" setup>
import ButtonIconDownload from "~/assets/images/button-icon-download.png";

const aTag = ref<HTMLAnchorElement | null>(null);

interface PixelButtonMiniPlayProps {
  href?: string;
}

function handleLink() {
  if (aTag.value !== null) {
    aTag.value.click();
  }
}

const props = withDefaults(defineProps<PixelButtonMiniPlayProps>(), {
  href: undefined,
});
const emit = defineEmits(["up", "down"]);
</script>

<template>
  <PixelButtonMini @up="handleLink(), emit('up')" @down="emit('down')">
    <PixelImage
      :src="ButtonIconDownload"
      :width="9"
      :height="7"
      class="relative top-[8px] left-[8px]"
    />
    <a v-if="href" ref="aTag" target="_blank" class="hidden" :href="href" />
  </PixelButtonMini>
</template>
