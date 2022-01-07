import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <title>Hieu Nguyen - Homepage</title>
      </Head>
      {/* contain an image and greet box         */}
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
              Hello, Im a student studying at University of Information
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
              <Text>Last year student at UIT</Text>
            </Flex>
            <Flex justifyContent="center">
              <Avatar
                zIndex={1}
                src="/images/sloth-color.png"
                size="xl"
                borderWidth="2px"
                borderColor="white"
              ></Avatar>
            </Flex>
          </Flex>
          <Section>
            <SectionHeader section="Work"></SectionHeader>
            <Text mb={4} textAlign="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              ducimus iusto beatae repellat, voluptas nihil consectetur debitis
              voluptate minima autem quas tempora dolore quisquam tenetur facere
              culpa corrupti quo aut.
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
            <SectionHeader section="Bio"></SectionHeader>
            <Bios></Bios>
          </Section>
          <Section>
            <SectionHeader section="Hobbies">
              <HeartIcon></HeartIcon>
            </SectionHeader>
            <Text alignSelf="flex-start">
              Basketball <BasketballIcon />, Music, Film photography, Art,
              Games, Movies
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
