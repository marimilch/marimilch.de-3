import { PIXEL_SIZE, PIXEL_SIZE_RENDERED, SpriteSrc } from "~/ts/globals";

type SpriteStyleConfig = {
  spriteSrc: SpriteSrc;
  width: number;
  height: number;
  mapWidth: number;
  mapHeight: number;
  indexX?: Ref<number>;
  indexY?: Ref<number>;
};

// by convention, composable function names start with "use"
export function useSpriteStyle(config: SpriteStyleConfig): ComputedRef {
  const renderedWidth = computed(
    () => config.width * PIXEL_SIZE_RENDERED + "px"
  );
  const renderedHeight = computed(
    () => config.height * PIXEL_SIZE_RENDERED + "px"
  );

  const style = computed(() => ({
    width: `calc(${PIXEL_SIZE} * ${config.width})`,
    height: `calc(${PIXEL_SIZE} * ${config.height})`,
    backgroundImage: `url(${config.spriteSrc})`,
    backgroundPosition: `calc(-${config.indexX?.value ?? 0} * ${
      renderedWidth.value
    }) calc(-${config.indexY?.value ?? 0} * ${renderedHeight.value})`,
    backgroundSize: `${
      config.mapWidth * config.width * PIXEL_SIZE_RENDERED
    }px ${config.mapHeight * config.height * PIXEL_SIZE_RENDERED}px`,
  }));

  return style;
}
