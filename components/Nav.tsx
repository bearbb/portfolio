import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

import Link from "next/link";

const BgColorTransparent = "rgba(40,40,40,0.7)";

const FeatherIcon = () => {
  // const color  = useColorModeValue()
  return <FontAwesomeIcon icon={faFeatherAlt}></FontAwesomeIcon>;
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
      <Flex
        w="100%"
        h="100%"
        justifyContent="center"
        borderWidth={2}
        borderColor="red"
      >
        <Flex id="LogoContainer">
          <Box>
            <FeatherIcon></FeatherIcon>
          </Box>
          <Heading as="h2" size="md">
            Hieu Nguyen
          </Heading>
        </Flex>
        <Flex id="NavigatorContainer">
          {/* <Button></Button>
		<Button></Button>
		<Button></Button> */}
          <Link href="/works">
            <a>Works</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/test">
            <a href="">Source</a>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
