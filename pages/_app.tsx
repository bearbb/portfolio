import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
  ColorModeProvider,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/m-plus-rounded-1c";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";
import Head from "next/head";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gruvBg: {
      50: "#fffdf2",
      100: "#f9f5d7",
      200: "#fbf1c7",
      300: "#d5c4a1",
      500: "#665c54",
      600: "#504945",
      700: "#3c3836",
      800: "#282828",
      900: "#1d2021",
    },
    gruvFg: {
      800: "#ebdbb2",
      100: "#3c3836",
    },
    gruvGray: { 800: "#928374", 100: "#928374" },
    gruvPurple: {
      500: "#f2a3b9",
      600: "#d3869b",
      700: "#b16286",
      800: "#8f3f71",
    },
    gruvWhite: {
      100: "#fbf1c7",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gruvBg.100", "gruvBg.800")(props),
        color: mode("gruvFg.100", "rgba(255, 255, 255, 0.92)")(props),
      },
    }),
  },
  fonts: {
    body: "Inter",
  },
});

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        {/* <link rel="shortcut icon" href="/images/feather.ico" /> */}
      </Head>
      <Nav />
      {/* <Layout router={router} title={router.pathname}> */}
      <AnimatePresence exitBeforeEnter initial={true}>
        {/* <AnimateSharedLayout> */}
        <Component {...pageProps} />
        {/* </AnimateSharedLayout> */}
      </AnimatePresence>
      {/* </Layout> */}
    </ChakraProvider>
  );
}

export default MyApp;
