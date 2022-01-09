import React from "react";

import { Center, Box, Text, Img } from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/fontawesome-free-regular";
const CopyRIcon = faCopyright as IconProp;

import { Nav } from "components/Nav";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Article } from "components/article";
// import styled from '@emotion/styled';
import { css } from "@emotion/react";
// import {RouterEvent} from 'next/router';

interface LayoutProps {
  children: React.ReactChild | React.ReactChild[];
  title: string;
  // router: any;
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

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Article title={title}>
      <Box pt={28} minW="360px" pb={7}>
        {/* <Nav /> */}
        <Center mt={7} zIndex={-1000} mb={7}>
          <Img
            w="17%"
            src="/images/pizza-edited.png"
            alt="pixel art pizza"
            css={css`
              @media (max-width: 750px) {
                width: 50%;
              }
            `}
          ></Img>
        </Center>
        {children}
        <Footer />
      </Box>
    </Article>
  );
};
