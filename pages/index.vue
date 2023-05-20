<template>
  <div class="max-w-3xl mx-auto">
    <div class="px-6 flex justify-between items-center gap-2">
      <div class="flex items-center gap-8">
        <LogoMini />
        <OnPixelGrid class="text-purple hidden sm:block md:text-large">
          marimilch
        </OnPixelGrid>
      </div>

      <PixelButton class="mt-2">About</PixelButton>
    </div>

    <PixelHeader class="mt-8" />

    <div class="px-6 mt-8">
      <OnPixelGrid class="text-cyan sm:text-large">
        Star Fox Clone
      </OnPixelGrid>
    </div>
    <div class="px-6 py-2">
      <OnPixelGrid> A clone of the first stage in Star Fox. </OnPixelGrid>
      <PixelButtonMiniPlay class="mt-4" />
    </div>

    <div class="px-6 py-2 opacity-25 mt-12 flex flex-col items-center">
      <div>
        <OnPixelGrid> +-+</OnPixelGrid>
        <OnPixelGrid> |c| marimilch </OnPixelGrid>
        <OnPixelGrid> +-+ </OnPixelGrid>
      </div>
      <OnPixelGrid class="mt-8"> too poor </OnPixelGrid>
      <OnPixelGrid> for cereal </OnPixelGrid>
    </div>
  </div>
</template>
