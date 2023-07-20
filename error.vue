<script lang="ts" setup>
const props = defineProps<{
  error: Object;
}>();

const handleError = () => clearError({ redirect: "/" });

console.log(props.error);
</script>

<template>
  <MainPage>
    <div class="flex flex-col w-full p-8 h-screen justify-center">
      <OnPixelGrid class="text-purple text-large">
        {{ error.statusCode || "Error" }}
      </OnPixelGrid>
      <OnPixelGrid class="my-4 text-cyan">
        {{ error.message }}
      </OnPixelGrid>
      <PixelButton @up="handleError()">Ok</PixelButton>
    </div>
  </MainPage>
</template>
