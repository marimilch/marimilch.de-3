<template>
  <div>
    <div class="px-6 flex justify-between items-center gap-2 pb-8">
      <div class="flex items-center gap-8">
        <OnPixelGrid class="text-cyan md:text-large">
          Star Fox Clone
        </OnPixelGrid>
      </div>
    </div>

    <div class="px-6 py-2">
      <OnPixelGrid>
        A clone of the first stage of Star Fox for Super Nintendo. Defeat the
        boss at the end of the stage to win.
      </OnPixelGrid>
    </div>

    <PixelSpinningModel
      class="h-[min(50vmax,_25rem)]"
      model-src="star-fox-clone/fake_wing.glb"
      :camera-distance="20"
    />
  </div>
</template>
