<template>
  <div
    class="font-main text-base text-purple py-4 bg-purple-100 relative min-h-screen"
  >
    <PixelLoadingBar />

    <div class="blur-[.75px] rounded-xl bg-purple-100 flex justify-center">
      <!-- <PixelTransition :trigger="pageState"></PixelTransition> -->
      <div class="max-w-3xl w-full">
        <PixelNavigation />
        <div class="relative">
          <slot />
        </div>
        <div
          class="px-6 py-2 opacity-25 mt-12 flex flex-col items-center gap-2"
        >
          <OnPixelGrid> marimilch </OnPixelGrid>
          <OnPixelGrid> ## page end ## </OnPixelGrid>
        </div>
      </div>
    </div>

    <div
      class="fixed top-0 left-0 w-full h-screen pointer-events-none blur-sm overflow-hidden z-20"
    >
      <div
        v-for="i in 20"
        :key="i"
        class="black-bar w-full opacity-20"
        :class="i % 2 === 0 ? 'bg-black h-[10vh]' : 'h-[10vh]'"
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
  animation: top-to-bottom 1s linear infinite;
}

@keyframes top-to-bottom {
  from {
    transform: translateY(-20vh);
  }
  to {
    transform: translateY(0);
  }
}
</style>
