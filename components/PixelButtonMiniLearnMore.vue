<script lang="ts" setup>
import ButtonIconInfo from "~/assets/images/button-icon-info.png";

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
      :src="ButtonIconInfo"
      :width="8"
      :height="7"
      class="relative top-[7px] left-[11px]"
    />
    <a v-if="href" ref="aTag" target="_blank" class="hidden" :href="href" />
  </PixelButtonMini>
</template>
