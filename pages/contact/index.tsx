import React from "react";
import { Layout } from "components/Layout";
import { SnsLink } from "components/Sns";
import {
  Button,
  Text,
  Heading,
  Container,
  Flex,
  Box,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { css } from "@emotion/react";
import Head from "next/head";

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

const Contact = () => {
  const toast = useToast();
  return (
    <Layout title="Hieu Nguyen - Contact">
      <Container maxW="container.sm" pl={10} pr={10}>
        <Heading size="md" mb={4}>
          Contact
        </Heading>
        <Box>
          <Text mb={4}>You can contact me via: </Text>
          <Flex flexDir="column">
            <SnsLink
              href="https://www.facebook.com/auhtor.hin/"
              username="auhtor.hin"
            >
              <FontAwesomeIcon icon={FbIcon}></FontAwesomeIcon>
            </SnsLink>
            <SnsLink
              href="https://www.instagram.com/swanoogie/"
              username="swanoogie"
            >
              <FontAwesomeIcon icon={InsIcon}></FontAwesomeIcon>
            </SnsLink>
            <Button
              w="fit-content"
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
              onClick={() => {
                navigator.clipboard.writeText("swanoogie@gmail.com");
                toast({
                  status: "success",
                  description: "Email copied",
                  duration: 3000,
                });
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <Text>swanoogie@gmail.com</Text>
              <CopyIcon></CopyIcon>
            </Button>
          </Flex>
        </Box>
      </Container>
    </Layout>
  );
};

export default Contact;
