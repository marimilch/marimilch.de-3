import { PIXEL_SIZE_RENDERED } from "~/ts/globals";

export function wait(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function onPixelGrid(n: number): number {
  return Math.round(n / PIXEL_SIZE_RENDERED) * PIXEL_SIZE_RENDERED;
}

export type OnEnterFrameData = {
  dt: number;
  mesh: THREE.Mesh;
  camera: THREE.Camera;
  renderer: THREE.Renderer;
  // composer: any;
  scene: THREE.Scene;
};

export type OnInitData = {
  camera: THREE.Camera;
  renderer: THREE.Renderer;
  // composer: any;
  scene: THREE.Scene;
};
