import React from "react";

import {
  Center,
  Flex,
  Container,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/fontawesome-free-regular";
const CopyRIcon = faCopyright as IconProp;

import { Nav } from "components/Nav";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface LayoutProps {
  children: React.ReactChild | React.ReactChild[];
}

const Footer = () => {
  return (
    <Center w="100vw" mt={10} pl={5} pr={5}>
      <Text fontSize="sm" opacity={0.4}>
        <FontAwesomeIcon icon={CopyRIcon} /> 2022 Nguyen Minh Hieu. Inspired by
        Takuya Matsuyama
      </Text>
    </Center>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box pt={14} minW="360px" pb={7}>
      <Nav />
      <Center mt={9} zIndex={-1000} mb={9}>
        <Image
          width="250px"
          height="200px"
          src="/images/pizza-edited.png"
          alt="tower"
        ></Image>
      </Center>
      {children}
      <Footer />
    </Box>
  );
};
