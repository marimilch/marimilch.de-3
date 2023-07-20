import { Howl } from "howler";
import { SpriteSrc, PIXEL_SIZE } from "~/ts/globals";
import { wait } from "~/ts/helpers";
import ReleaseSound from "~/assets/sfx/gameboy-pluck--pixabay.mp3";

type ButtonLikeConfig = {
  spriteSrc: SpriteSrc;
  width: number;
  height: number;
  button: Ref<HTMLElement | null>;
  emit: (event: "up" | "down", ...args: any[]) => void;
};

type ButtonLikeStyleData = {
  wrapStyle: ComputedRef;
  contentStyle: ComputedRef;
};

const releaseSoundHowl = new Howl({
  src: [ReleaseSound],
});

async function down(indexX: Ref<number>) {
  indexX.value = 1;
  await wait(30);
  indexX.value = 2;
}

async function up(indexX: Ref<number>) {
  releaseSoundHowl.play();
  await wait(120);
  indexX.value = 1;
  await wait(30);
  indexX.value = 0;
}

export function useButtonLikeStyle(
  config: ButtonLikeConfig
): ButtonLikeStyleData {
  const indexX = ref(0);
  const button = config.button;

  onMounted(() => {
    button.value?.addEventListener("touchstart", (e) => {
      e.preventDefault();
      down(indexX);
      config.emit("down");
    });

    button.value?.addEventListener("touchend", (e) => {
      e.preventDefault();
      up(indexX);
      config.emit("up");
    });

    button.value?.addEventListener("mousedown", (e) => {
      e.preventDefault();
      down(indexX);
      config.emit("down");
    });

    button.value?.addEventListener("mouseup", (e) => {
      e.preventDefault();
      up(indexX);
      config.emit("up");
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
