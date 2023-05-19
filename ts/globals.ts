export const PIXEL_SIZE = "3.5px";
export const PIXEL_SIZE_RENDERED = 3.5;

export function calcPixelSizeAsNumber(): number {
  const measure = document.createElement("div");
  measure.style.width = PIXEL_SIZE;
  measure.style.height = "1px";

  document.body.appendChild(measure);
  const result = measure.getBoundingClientRect().width;

  measure.remove();

  return result;
}

export type SpriteSrc = string;
