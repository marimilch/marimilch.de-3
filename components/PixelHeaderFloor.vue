<script lang="ts" setup>
import * as THREE from "three";
import { OnEnterFrameData, OnInitData } from "~/ts/helpers";

const threeCanvas = ref<HTMLElement | undefined>(undefined);
let distanceToMidYFraction: ComputedRef<number> | null = null;
let texture: THREE.Texture | null = null;

const props = defineProps<{ cameraDistance: number }>();

onMounted(() => {
  const { distanceToMidYFraction: y } = useDistanceToMidScroll(threeCanvas);
  distanceToMidYFraction = y;
});

const onInit = ({ camera, scene }: OnInitData) => {
  texture = new THREE.TextureLoader().load("/textures/floor-3d.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.repeat.set(20, 10);

  camera.position.z = props.cameraDistance;

  const geometry = new THREE.PlaneGeometry(20, 10);
  const material = new THREE.MeshBasicMaterial({
    // color: 0x000000,
    side: THREE.DoubleSide,
    map: texture,
    transparent: true,
  });
  const plane = new THREE.Mesh(geometry, material);

  scene.add(plane);

  return plane;
};

const onEnterFrame = ({ dt, scene }: OnEnterFrameData) => {
  if (texture === null) {
    return;
  }
  const safeDistanceToMidYFraction = distanceToMidYFraction
    ? distanceToMidYFraction.value
    : 0;
  scene.rotation.x = -safeDistanceToMidYFraction * 0.35 + Math.PI / 2 - 0.3;
  texture.offset.y -= dt * 0.003;
  texture.offset.y %= 1.0;

  //   mesh.position.add(new THREE.Vector3(0, dt * 0.003, 0));
  //   mesh.position.y -= 3.75;
  //   mesh.position.y %= 2;
  //   mesh.position.y += 3.75;

  //   mesh.scale.z = xzScaleFactor.value;
};
</script>

<template>
  <div
    class="floor-thing overflow-visible flex justify-center items-center w-full"
  >
    <PixelThree
      ref="threeCanvas"
      class="w-full h-[100vmax] pointer-events-none"
      :on-enter-frame="onEnterFrame"
      :on-init="onInit"
    />
  </div>
</template>
