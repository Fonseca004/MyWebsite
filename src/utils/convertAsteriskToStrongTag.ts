import theme from "../data/theme.ts";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants.ts";

export default function convertAsteriskToStrongTag(str: string) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal ${
      MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]
    }">$1</strong>`
  );
}
