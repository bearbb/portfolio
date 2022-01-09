import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Article } from "components/article";

import {
  Heading,
  Container,
  Flex,
  Text,
  Img,
  Box,
  Center,
  Avatar,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

//components
import { Layout } from "components/Layout";
import { Bios } from "components/Bio";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";

import { faHeart, faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Sns } from "@/components/Sns";

const HeartIcon = () => <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>;
const BasketballIcon = () => (
  <FontAwesomeIcon icon={faBasketballBall} color="#ee8742"></FontAwesomeIcon>
);

const Section = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) => {
  return (
    <Flex mt={10} flexDir="column" alignItems="center">
      {children}
    </Flex>
  );
};
const SectionHeader = ({
  section,
  children,
}: {
  section: string;
  children?: React.ReactChild;
}) => {
  return (
    <Box
      borderBottom="3px solid #525252"
      alignSelf="flex-start"
      mb={4}
      display="flex"
      alignItems="center"
      flexDir="row"
    >
      <Text fontWeight="bold" fontSize="xl" lineHeight="tall" mr={2}>
        {section}
      </Text>
      {children}
    </Box>
  );
};

const Home: NextPage = () => {
  return (
    <Layout title="Hieu Nguyen - Homepage">
      <Container maxW="container.sm" pl={10} pr={10}>
        <Flex w="100%" justifyContent="center" flexDir="column">
          <Box
            id="GreetingBox"
            rounded={5}
            pt={3}
            pb={3}
            pl={5}
            pr={5}
            bg={useColorModeValue("gruvBg.50", "gruvBg.700")}
            fontWeight="medium"
            mt={9}
          >
            <Text textAlign="center">
              Hello, I am a senior student at University of Information
              Technology
            </Text>
          </Box>
        </Flex>
        <Flex flexDir="column" gap={1} mt={6}>
          <Flex justifyContent="space-between">
            <Flex flexDir="column">
              <Heading as="h1" size="xl" fontWeight="700" letterSpacing="wide">
                Hieu Nguyen
              </Heading>
              {/* <Text>Last year student at UIT</Text> */}
            </Flex>
            <Flex justifyContent="center">
              <Avatar
                zIndex={1}
                // src="/images/sloth-color.png"
                src="/images/author.jpg"
                size="xl"
                borderWidth="2px"
                borderColor="white"
              ></Avatar>
            </Flex>
          </Flex>
          <Section>
            <SectionHeader section="About me"></SectionHeader>
            <Text
              mb={4}
              textAlign="justify"
              css={css`
                text-indent: 1em;
              `}
            >
              I have considerable passion for creating digital services,
              specifically enthusiastic about Web development, both on front-end
              and back-end. Besides, I am willing to learn more about UI/UX to
              create more wonderful websites.
              {/* When not working, I loves playing
              basketball or take some film photo. */}
            </Text>
            <Link href="/works">
              <a>
                <Button
                  bg={useColorModeValue("gruvPurple.500", "gruvPurple.700")}
                  _hover={{
                    bg: useColorModeValue("gruvPurple.600", "gruvPurple.800"),
                  }}
                  rightIcon={<ChevronRightIcon boxSize={6} />}
                >
                  My portfolio
                </Button>
              </a>
            </Link>
          </Section>
          <Section>
            <SectionHeader section="Education"></SectionHeader>
            <Bios></Bios>
          </Section>
          <Section>
            <SectionHeader section="Hobbies">
              <HeartIcon></HeartIcon>
            </SectionHeader>
            <Text alignSelf="flex-start">
              Basketball <BasketballIcon />, Music, Film Photography, Arts,
              Video Games and Movies.
            </Text>
          </Section>
          <Section>
            <SectionHeader section="On the web"></SectionHeader>
            <Sns></Sns>
          </Section>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;
