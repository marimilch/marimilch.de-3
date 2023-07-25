<template>
  <div>
    <PixelHeader />

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
        <PixelButtonMiniPlay
          class="mt-4"
          href="/game-assets/star-fox-clone/play"
        />
        <PixelButtonMiniDownload
          class="mt-4"
          href="/game-assets/star-fox-clone/star-fox-clone.zip"
        />
        <PixelButtonMiniLearnMore
          class="mt-4"
          @up="navigateTo('/game/star-fox-clone')"
        />
      </div>
    </div>

    <div class="px-6 mt-8">
      <OnPixelGrid class="text-cyan sm:text-large"> Klara </OnPixelGrid>
    </div>
    <div class="px-6 py-2">
      <OnPixelGrid> RPG Maker 2003 game about guilt. </OnPixelGrid>
      <div class="flex gap-4">
        <PixelButtonMiniDownload
          class="mt-4"
          href="/game-assets/klara/klara.zip"
        />
        <PixelButtonMiniLearnMore
          class="mt-4"
          @up="navigateTo('/game/klara')"
        />
      </div>
    </div>
  </div>
</template>
