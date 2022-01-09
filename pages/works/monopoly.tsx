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
const Monopoly = () => {
  return (
    <WorkDetailsLayout pjName="Monopoly game" year="2021">
      <Text
        mb={4}
        textAlign="justify"
        fontWeight="normal"
        css={css`
          text-indent: 1em;
        `}
      >
        Multiplayer monopoly web game.
      </Text>
      <BadgeNDetails badge="website">
        <NextLink href="https://monopoly-swanoogie-game.herokuapp.com/">
          <CustomLink>
            https://monopoly-swanoogie-game.herokuapp.com/
          </CustomLink>
        </NextLink>
      </BadgeNDetails>
      <BadgeNDetails badge="stack">
        <Text>
          React, Chakra UI,{" "}
          <CustomLink href="https://boardgame.io">boardgame.io</CustomLink>
        </Text>
      </BadgeNDetails>
      <Flex pt={4} pl={1} pr={1} gap={6} flexDir="column">
        <CustomImg src="/images/monopoly.png" />
        <CustomImg src="/images/monopoly1.png" />
        <CustomImg src="/images/monopoly2.png" />
      </Flex>
    </WorkDetailsLayout>
  );
};

export default Monopoly;
