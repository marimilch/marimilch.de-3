<script lang="ts" setup>
import "assets/css/variables.css";
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: Quinque Five Font;
  src: url("/fonts/Quinquefive-ALoRM.ttf");
}

html {
  background-color: rgb(var(--color-purple-100));
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s steps(4, jump-start);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
.page-enter-active {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
