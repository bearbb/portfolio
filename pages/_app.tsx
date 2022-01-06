import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
  ColorModeProvider,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Nav } from "../components/Nav";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gruvBg: {
      100: "#fbf1c7",
      800: "#282828",
    },
    gruvFg: { 800: "#ebdbb2", 100: "#3c3836" },
    gruvGray: { 800: "#928374", 100: "#928374" },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gruvBg.100", "gruvBg.800")(props),
        color: mode("gruvFg.100", "gruvFg.800")(props),
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      {/* <Nav></Nav> */}
    </ChakraProvider>
  );
}

export default MyApp;
