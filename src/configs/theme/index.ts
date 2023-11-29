import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import fonts from "./fonts.theme";
import components from "./components";

const config = {
  //   initialColorMode: "dark",
  //   useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  ...fonts,
  components,
});

console.log(theme.colors);

export default theme;
