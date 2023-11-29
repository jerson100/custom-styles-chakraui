import { mode } from "@chakra-ui/theme-tools";
import colorsTheme from "../colors";

export default {
  baseStyle: {
    color: mode(
      colorsTheme.text.primary.lightMode,
      colorsTheme.text.primary.darkMode
    ),
  },
};
