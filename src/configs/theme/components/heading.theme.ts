import { mode } from "@chakra-ui/theme-tools";
import colorsTheme from "../colors";

export default {
  baseStyle: {
    color: mode(
      colorsTheme.text.primary.lightMode,
      colorsTheme.text.primary.darkMode
    ),
  },
  variants: {
    // heading1: {
    //   fontSize:
    //     "clamp(1.25rem, 1.0769230769230769rem + 0.7692307692307693vw, 2rem);",
    // },
  },
};
