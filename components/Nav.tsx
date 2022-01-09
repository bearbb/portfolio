import React from "react";

import "@fontsource/m-plus-rounded-1c";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const GithubIcon = faGithub as IconProp;
import {
  Container,
  Box,
  BoxProps,
  Flex,
  Button,
  ButtonProps,
  useColorMode,
  ColorMode,
  Center,
  Heading,
  IconProps,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useColorModeValue,
} from "@chakra-ui/react";

import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";

import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const FeatherLogoStyle = styled("span")`
  cursor: pointer;
  &:hover .FeatherIcon {
    transform: rotateY(180deg);
  }
  .FeatherIcon {
    transform-style: preserve-3d;
    transition: transform 400ms ease;
  }
`;

const BgColorTransparent = {
  dark: "rgba(40,40,40,0.7)",
  light: "rgba(255, 253, 242, 0.7)",
};
//TODO: using backdropFilter to make nav transparent

const FeatherLogo = () => {
  return (
    <FeatherLogoStyle>
      <Link href="/">
        <a>
          <Center gap={1}>
            <FontAwesomeIcon
              icon={faFeatherAlt}
              className="FeatherIcon"
              cursor="pointer"
              display="block"
            ></FontAwesomeIcon>
            <Heading
              as="h2"
              fontSize="20px"
              letterSpacing="tighter"
              lineHeight="20px"
              fontWeight="bold"
            >
              Hieu Nguyen
            </Heading>
          </Center>
        </a>
      </Link>
    </FeatherLogoStyle>
  );
};

interface ToggleColorModeProps {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

const IconStyle: IconProps = {
  boxSize: 5,
  cursor: "pointer",
};
const ButtonStyle: ButtonProps = {
  size: "md",
  p: 2,
  _focus: {
    border: "none",
  },
  boxSize: 10,
};
const ToggleColorMode = ({
  colorMode,
  toggleColorMode,
}: ToggleColorModeProps) => {
  return colorMode === "dark" ? (
    <Button
      onClick={() => {
        toggleColorMode();
      }}
      {...ButtonStyle}
      bg="gruvBg.200"
      color="gruvFg.100"
      _hover={{ bg: "gruvBg.300" }}
    >
      <SunIcon {...IconStyle} />{" "}
    </Button>
  ) : (
    <Button
      onClick={() => {
        toggleColorMode();
      }}
      {...ButtonStyle}
      bg="gruvPurple.700"
      color="gruvWhite.100"
      _hover={{ bg: "gruvPurple.800" }}
    >
      <MoonIcon {...IconStyle} />
    </Button>
  );
};

export const Nav = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      zIndex={1000}
      minW="360px"
      w="100vw"
      h={14}
      position="fixed"
      pt={2}
      pb={2}
      top={0}
      left={0}
      backdropFilter="blur(10px)"
      bgColor={
        colorMode === "dark"
          ? BgColorTransparent.dark
          : BgColorTransparent.light
      }
    >
      <Container maxW="container.md" height="100%">
        <Flex w="100%" h="100%" justifyContent="space-between">
          <Flex flex="2 1" gap={5}>
            <Center id="LogoContainer" gap={1}>
              <Box>
                <FeatherLogo></FeatherLogo>
              </Box>
            </Center>
            <Flex
              id="NavigatorContainer"
              justifyContent="space-around"
              gap={3}
              alignItems="center"
              css={css`
                @media (max-width: 750px) {
                  display: none;
                }
              `}
            >
              <Link href="/works" passHref>
                <LinkStyle active={router.pathname === "/works"}>
                  Works
                </LinkStyle>
              </Link>
              <Link href="/contact" passHref>
                <LinkStyle active={router.pathname === "/contact"}>
                  Contact
                </LinkStyle>
              </Link>
              <Link href="https://github.com/bearbb/portfolio">
                <a>
                  <Flex>
                    <LinkStyle active={false}>Source</LinkStyle>
                    <span style={{ marginLeft: "3px" }}>
                      <FontAwesomeIcon
                        icon={GithubIcon}
                        size="sm"
                      ></FontAwesomeIcon>
                    </span>
                  </Flex>
                </a>
              </Link>
            </Flex>
          </Flex>
          <Flex flex="1 1">
            <Flex w="100%" justifyContent="flex-end" gap={2}>
              <ToggleColorMode
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
              ></ToggleColorMode>
              <Menu colorMode={colorMode}></Menu>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

interface LinkStyleProps {
  active: boolean;
}
const LinkStyle = styled.span<LinkStyleProps>`
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px 0 5px;
  background-color: ${(props) => {
    if (props.active) return "#f2a3b9";
  }};
`;

const Menu = ({ colorMode }: { colorMode: ColorMode }) => {
  const MenuButton = (props: BoxProps) => {
    return (
      <Box
        {...props}
        cursor="pointer"
        rounded={0}
        w="220px"
        bg={colorMode === "light" ? "gruvBg.200" : "gruvBg.600"}
        _hover={{
          transition: "200ms ease",
          bg: colorMode === "light" ? "gruvBg.300" : "gruvBg.700",
          textDecoration: "underline",
        }}
        fontWeight="normal"
        textAlign="left"
        p={2}
      ></Box>
    );
  };
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          {...ButtonStyle}
          bg={colorMode === "light" ? "gruvBg.100" : "gruvBg.800"}
          _hover={{
            bg: colorMode === "light" ? "gruvBg.200" : "gruvBg.700",
          }}
          borderWidth="1px"
          borderColor="rgba(247, 250, 252, 0.4)"
          css={css`
            @media (max-width: 750px) {
              display: block;
            }
            display: none;
          `}
        >
          <HamburgerIcon {...IconStyle}></HamburgerIcon>
        </Button>
      </PopoverTrigger>
      <PopoverContent w="unset" mr={3} _focus={{ border: "none" }}>
        <Flex flexDir="column">
          <MenuButton>
            <Link href="/works">Works</Link>
          </MenuButton>
          <MenuButton>
            <Link href="/contact">Contact</Link>
          </MenuButton>
          <MenuButton>
            <Link href="https://github.com/bearbb/portfolio">View source</Link>
          </MenuButton>
        </Flex>
      </PopoverContent>
    </Popover>
  );
};
