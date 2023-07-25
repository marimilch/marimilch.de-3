<template>
  <div>
    <div class="px-6 flex justify-between items-center gap-2">
      <div class="flex items-center gap-8">
        <LogoMini />
        <OnPixelGrid class="text-purple hidden sm:block md:text-large">
          marimilch
        </OnPixelGrid>
      </div>

      <PixelButton class="mt-2" @up="navigateTo('/about')">About</PixelButton>
    </div>

    <PixelHeader class="mt-8" />

    <!-- <div class="px-6 mt-8">
      <OnPixelGrid class="text-cyan sm:text-large"> Inc Party </OnPixelGrid>
    </div>
    <div class="px-6 py-2">
      <OnPixelGrid> Picolo inspired mobile game. </OnPixelGrid>
      <PixelButtonMiniPlay class="mt-4" />
    </div> -->

    <div class="px-6 mt-8">
      <OnPixelGrid class="text-cyan sm:text-large">
        Star Fox Clone
      </OnPixelGrid>
    </div>
    <div class="px-6 py-2">
      <OnPixelGrid> Clone of the first stage in Star Fox. </OnPixelGrid>
      <div class="flex gap-4">
        <PixelButtonMiniPlay class="mt-4" href="/starfox" />
        <PixelButtonMiniDownload class="mt-4" href="/starfox" />
        <PixelButtonMiniLearnMore class="mt-4" href="/starfox" />
      </div>
    </div>

    <div class="px-6 mt-8">
      <OnPixelGrid class="text-cyan sm:text-large"> Klara </OnPixelGrid>
    </div>
    <div class="px-6 py-2">
      <OnPixelGrid> RPG Maker 2003 game about guilt. </OnPixelGrid>
      <PixelButtonMiniPlay class="mt-4" />
    </div>

    <div class="px-6 py-2 opacity-25 mt-12 flex flex-col items-center gap-2">
      <OnPixelGrid> marimilch </OnPixelGrid>
      <OnPixelGrid> ## page end ## </OnPixelGrid>
    </div>
  </div>
</template>
