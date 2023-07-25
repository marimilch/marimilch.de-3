<template>
  <div>
    <div class="px-6 flex justify-between items-center gap-2 pb-8">
      <div class="flex items-center gap-8">
        <OnPixelGrid class="text-cyan md:text-large"> About </OnPixelGrid>
      </div>
    </div>

    <div class="px-6 py-2">
      <OnPixelGrid>
        I'm a graduate in computer science and I really enjoy programming and
        anything involving creativity.
      </OnPixelGrid>
    </div>

    <PixelSpinningModel
      class="h-[min(50vmax,_25rem)]"
      model-src="glass_milk.glb"
      :camera-distance="0.6"
    />

    <div class="px-6 py-2">
      <OnPixelGrid>
        marimilch is a reference to the german version of the book A Shadow Like
        A Leopard by Myron Levoy.
      </OnPixelGrid>
    </div>

    <PixelSpinningModel
      class="h-[min(50vmax,_25rem)]"
      model-src="tv.glb"
      :camera-distance="8"
    />

    <div class="px-6 py-2">
      <OnPixelGrid class="text-cyan"> I would like to thank: </OnPixelGrid>
    </div>

    <div class="px-6 py-2">
      <OnPixelGrid>
        My mother, my father, Arkady, Katharina, Sev, Felix, Marko, Renyo,
        Cedric, Batiste
      </OnPixelGrid>
    </div>
  </div>
</template>
