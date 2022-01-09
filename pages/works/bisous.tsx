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

import NextLink from "next/link";

import { css } from "@emotion/react";

export const CustomLink = ({
  children,
  href,
}: {
  children: React.ReactChild;
  href?: string;
}) => (
  <Link
    color={useColorModeValue("gruvPurple.800", "gruvPurple.500")}
    fontWeight="500"
    href={href ? href : children.toString()}
  >
    {children}
  </Link>
);

export const CustomImg = ({ src }: { src: string }) => (
  <Img src={src} boxSize="100%" rounded={8}></Img>
);

const Bisous = () => {
  return (
    <WorkDetailsLayout pjName="Bisous" year="2020">
      <Text
        mb={4}
        textAlign="justify"
        fontWeight="normal"
        css={css`
          text-indent: 1em;
        `}
      >
        A social network website where users can share their images and status,
        Interact with others, use token to authenticate and encrypted password
        as well.
      </Text>
      <BadgeNDetails badge="Website">
        <NextLink href="https://swanoogie.me">
          <CustomLink>https://swanoogie.me</CustomLink>
        </NextLink>
      </BadgeNDetails>
      <BadgeNDetails badge="stack">
        <Text>React, NodeJS, MongoDB</Text>
      </BadgeNDetails>
      <Flex id="ImageContainer" pt={4} pl={1} pr={1} gap={6} flexDir="column">
        <CustomImg src="/images/bisous.png" />
        <CustomImg src="/images/bisous1.png"></CustomImg>
        <CustomImg src="/images/bisous4.png" />
      </Flex>
    </WorkDetailsLayout>
  );
};

export default Bisous;

export const BadgeNDetails = ({
  badge,
  children,
}: {
  badge: string;
  children: React.ReactChild | React.ReactChild[];
}) => {
  return (
    <Flex gap={2} pl="1em" wrap="wrap">
      <Badge colorScheme="purple">{badge}</Badge>
      {children}
    </Flex>
  );
};
