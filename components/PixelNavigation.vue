<script lang="ts" setup>
const route = useRoute();
function navigateBackOrInfo() {
  if (isHome.value) {
    navigateTo("/about");
  } else {
    navigateTo("/");
  }
}

const isHome = computed(() => route.path === "/");
const buttonLabel = computed(() => (isHome.value ? "About" : "Back"));
</script>

<template>
  <div class="px-6 flex justify-between items-center gap-2 mb-8 md:mt-6 mt-1">
    <div class="flex items-center gap-8">
      <LogoMini />
      <OnPixelGrid class="text-purple hidden sm:block md:text-large">
        marimilch
      </OnPixelGrid>
    </div>

    <PixelButton class="mt-2" @up="navigateBackOrInfo()">
      {{ buttonLabel }}
    </PixelButton>
  </div>
</template>
