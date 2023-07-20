<script lang="ts" setup>
import * as THREE from "three";
import { OnEnterFrameData, OnInitData } from "~/ts/helpers";

const onEnterFrame = ({ mesh, dt }: OnEnterFrameData) => {
  mesh.rotation.y += (0.5 * dt) / 1000;
};

const onInit = ({ camera }: OnInitData) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshMatcapMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x += 0.5;
  camera.position.z = 3;

  return mesh;
};
</script>

<template>
  <PixelThree :on-enter-frame="onEnterFrame" :on-init="onInit" />
</template>
