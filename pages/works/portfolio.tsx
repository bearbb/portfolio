import React from "react";

import {
  Text,
  Flex,
  Badge,
  Img,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { WorkDetailsLayout } from "components/WorkDetailsLayout";
import { CustomImg, CustomLink, BadgeNDetails } from "pages/works/bisous";

import NextLink from "next/link";

import { css } from "@emotion/react";

const Portfolio = () => {
  return (
    <WorkDetailsLayout pjName="Portfolio" year="2021">
      <Text
        mb={4}
        textAlign="justify"
        fontWeight="normal"
        css={css`
          text-indent: 1em;
        `}
      >
        Personal portfolio - inspired by Takuya Matsuyama (
        <CustomLink href="https://www.craftz.dog/">craftz.dog</CustomLink>)
      </Text>
      <BadgeNDetails badge="website">
        <NextLink href="">
          <CustomLink>https://portfolio.link</CustomLink>
        </NextLink>
      </BadgeNDetails>
      <BadgeNDetails badge="stack">
        <Text>React, NextJS, Chakra UI, Emotion</Text>
      </BadgeNDetails>
      <Flex pt={4} pl={1} pr={1} gap={6} flexDir="column">
        <CustomImg src="/images/portfolio.png" />
        <CustomImg src="/images/portfolio1.png" />
      </Flex>
    </WorkDetailsLayout>
  );
};

export default Portfolio;
