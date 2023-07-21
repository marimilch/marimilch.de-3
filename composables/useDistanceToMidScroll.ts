import { useElementBounding, useWindowSize } from "@vueuse/core";

export const useDistanceToMidScroll = (target: Ref) => {
  const { x, y, width, height } = useElementBounding(target);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const xMid = computed(() => x.value + width.value / 2);
  const yMid = computed(() => y.value + height.value / 2);
  const distanceToMidX = computed(() => xMid.value - windowWidth.value / 2);
  const distanceToMidY = computed(() => yMid.value - windowHeight.value / 2);
  const distanceToMidXFraction = computed(
    () => distanceToMidX.value / windowWidth.value
  );
  const distanceToMidYFraction = computed(
    () => distanceToMidY.value / windowHeight.value
  );

  return {
    distanceToMidX,
    distanceToMidY,
    distanceToMidXFraction,
    distanceToMidYFraction,
  };
};
