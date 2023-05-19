import { calcPixelSizeAsNumber, PIXEL_SIZE_RENDERED } from "~/ts/globals";

export function wait(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function onPixelGrid(n: number): number {
  calcPixelSizeAsNumber();
  return Math.round(n / PIXEL_SIZE_RENDERED) * PIXEL_SIZE_RENDERED;
}
