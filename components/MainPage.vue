<template>
  <div
    class="font-main text-base text-purple py-4 bg-purple-100 relative min-h-screen"
  >
    <PixelLoadingBar />

    <div class="blur-[0.75px] rounded-xl bg-purple-100">
      <!-- <PixelTransition :trigger="pageState"></PixelTransition> -->
      <slot />
    </div>

    <div
      class="fixed top-0 left-0 w-full h-screen pointer-events-none blur-sm overflow-hidden z-20"
    >
      <div
        v-for="i in 100"
        :key="i"
        class="black-bar w-full opacity-50"
        :class="i % 2 === 0 ? 'bg-black h-[.5vh]' : 'h-[3vh]'"
      ></div>
    </div>

    <div
      class="fixed top-0 left-0 w-[2.5vmax] h-screen pointer-events-none bg-gradient-to-r from-black"
    ></div>

    <div
      class="fixed top-0 right-0 w-[2.5vmax] h-screen pointer-events-none bg-gradient-to-l from-black"
    ></div>

    <div
      class="fixed top-0 left-0 h-[2.5vmax] w-full pointer-events-none bg-gradient-to-b from-black"
    ></div>

    <div
      class="fixed bottom-0 left-0 h-[2.5vmax] w-full pointer-events-none bg-gradient-to-t from-black"
    ></div>
  </div>
</template>

<style scoped>
.black-bar {
  animation: top-to-bottom 2s linear infinite;
}

@keyframes top-to-bottom {
  from {
    transform: translateY(-3.5vh);
  }
  to {
    transform: translateY(3.5vh);
  }
}
</style>
