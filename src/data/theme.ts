import type { TailwindColor } from "../utils/types/tailwind.ts";

type Theme = {
  colors: {
    primary: TailwindColor;
    secundary: TailwindColor;
  };
};

const theme: Theme = {
  colors: {
    primary: "blue",
    secundary: "blue"
  },
};

export default theme;
