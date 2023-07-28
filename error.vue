<script lang="ts" setup>
const props = defineProps<{
  error: Object;
}>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col w-full p-8 justify-center">
      <OnPixelGrid class="text-purple text-large">
        {{ error.statusCode || "Error" }}
      </OnPixelGrid>
      <OnPixelGrid class="my-4 text-cyan">
        {{ error.message }}
      </OnPixelGrid>
      <PixelButton @up="handleError()">Ok</PixelButton>
    </div>
  </NuxtLayout>
</template>
