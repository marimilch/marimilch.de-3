import { SpriteSrc, PIXEL_SIZE } from "~/ts/globals";
import { wait } from "~/ts/helpers";

type ButtonLikeConfig = {
  spriteSrc: SpriteSrc;
  width: number;
  height: number;
  button: Ref<HTMLElement | null>;
};

type ButtonLikeStyleData = {
  wrapStyle: ComputedRef;
  contentStyle: ComputedRef;
};

export function useButtonLikeStyle(
  config: ButtonLikeConfig
): ButtonLikeStyleData {
  const indexX = ref(0);
  const button = config.button;

  onMounted(() => {
    button.value?.addEventListener("click", async () => {
      indexX.value = 1;
      await wait(30);
      indexX.value = 2;
      await wait(120);
      indexX.value = 1;
      await wait(30);
      indexX.value = 0;
    });
  });

  const style = useSpriteStyle({
    spriteSrc: config.spriteSrc,
    width: config.width,
    height: config.height,
    mapHeight: 1,
    mapWidth: 3,
    indexX,
  });

  const styleButtonContent = computed(() => ({
    transform: `translateY( calc( ${PIXEL_SIZE} * ${indexX.value} ) )`,
  }));

  return {
    wrapStyle: style,
    contentStyle: styleButtonContent,
  };
}
