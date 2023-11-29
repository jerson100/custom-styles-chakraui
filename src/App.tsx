import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/public/Home";
import theme from "./configs/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
