import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Box,
  Flex,
  Button,
  ButtonProps,
  useColorMode,
  ColorMode,
  Center,
  useColorModeValue,
  Heading,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import Link from "next/link";

const BgColorTransparent = "rgba(40,40,40,0.7)";

const FeatherIcon = () => {
  // const color  = useColorModeValue()
  return <FontAwesomeIcon icon={faFeatherAlt}></FontAwesomeIcon>;
};

interface ToggleColorModeProps {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

const ToggleColorMode = ({
  colorMode,
  toggleColorMode,
}: ToggleColorModeProps) => {
  const IconStyle: IconProps = {
    boxSize: 5,
    cursor: "pointer",
  };
  const ButtonStyle: ButtonProps = {
    size: "sm",
    p: 1,
    _focus: {
      border: "none",
    },
  };
  return colorMode === "dark" ? (
    <Button
      onClick={() => {
        toggleColorMode();
      }}
      {...ButtonStyle}
    >
      <SunIcon {...IconStyle} />{" "}
    </Button>
  ) : (
    <Button
      onClick={() => {
        toggleColorMode();
      }}
      {...ButtonStyle}
    >
      <MoonIcon {...IconStyle} />
    </Button>
  );
};

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      w="100vw"
      h={20}
      position="fixed"
      top={0}
      left={0}
      p={3}
      bgColor={BgColorTransparent}
    >
      <Container maxW="container.md">
        <Flex w="100%" h="100%" justifyContent="space-between">
          <Flex flex="2 1" justifyContent="space-between">
            <Center id="LogoContainer" gap={1}>
              <Box>
                <FeatherIcon></FeatherIcon>
              </Box>
              <Heading as="h2" size="md">
                Hieu Nguyen
              </Heading>
            </Center>
            <Center id="NavigatorContainer" justifyContent="space-around">
              <Link href="/works">
                <a>Works</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
              <Link href="/test">
                <a href="">Source</a>
              </Link>
            </Center>
          </Flex>
          <Flex flex="1 1">
            <Center id="ToggleColorModeContainer">
              <ToggleColorMode
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
              ></ToggleColorMode>
            </Center>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
