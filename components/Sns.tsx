import React from "react";

import { Button, Flex, Box, Text, useColorModeValue } from "@chakra-ui/react";
import {
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/fontawesome-free-brands";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const GithubIcon = faGithub as IconProp;
const FbIcon = faFacebook as IconProp;
const InsIcon = faInstagram as IconProp;

export const Sns = () => {
  return (
    <Box alignSelf="flex-start" display="flex" flexDir="column" gap={2}>
      <SnsLink href="https://github.com/bearbb" username="bearbb">
        <FontAwesomeIcon icon={GithubIcon}></FontAwesomeIcon>
      </SnsLink>
      <SnsLink
        href="https://www.facebook.com/auhtor.hin/"
        username="auhtor.hin"
      >
        <FontAwesomeIcon icon={FbIcon}></FontAwesomeIcon>
      </SnsLink>
      <SnsLink href="https://www.instagram.com/swanoogie/" username="swanoogie">
        <FontAwesomeIcon icon={InsIcon}></FontAwesomeIcon>
      </SnsLink>
    </Box>
  );
};

interface SnsLinkProps {
  href: string;
  children: React.ReactChild;
  username: string;
}

const SnsLink = ({ href, children, username }: SnsLinkProps) => {
  return (
    <Link href={href}>
      <a>
        <Button
          alignItems="center"
          gap={3}
          pr={4}
          pl={4}
          fontWeight="semibold"
          color={useColorModeValue("gruvPurple.800", "gruvPurple.500")}
          bg={useColorModeValue("gruvBg.100", "gruvBg.800")}
          _hover={{
            bg: useColorModeValue(
              "rgba(143, 63, 113, 0.2)",
              "rgba(242, 51, 185, 0.2)"
            ),
          }}
          rounded={5}
        >
          {children}
          <Text>@{username}</Text>
        </Button>
      </a>
    </Link>
  );
};
