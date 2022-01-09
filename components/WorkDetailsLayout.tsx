import React from "react";

import {
  useColorModeValue,
  Container,
  Link,
  Center,
  Box,
  Flex,
  Text,
  Heading,
  Badge,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { Layout } from "components/Layout";

import Head from "next/head";
import NextLink from "next/link";

interface WorkDetailsLayoutProps {
  pjName: string;
  year: string;
  children: React.ReactChild | React.ReactChild[];
}

export const WorkDetailsLayout = ({
  pjName,
  year,
  children,
}: WorkDetailsLayoutProps) => {
  return (
    <Layout>
      <Head>
        <title>{`${pjName} - Hieu Nguyen`}</title>
      </Head>
      <Container maxW="container.sm" pl={10} pr={10}>
        <Flex alignItems="center" gap={1} mb={4}>
          <NextLink href="/works">
            <Link
              fontWeight="semibold"
              color={useColorModeValue("gruvPurple.700", "gruvPurple.500")}
            >
              Works
            </Link>
          </NextLink>
          <ChevronRightIcon></ChevronRightIcon>
          <Heading as="h1" size="md">
            {pjName}
          </Heading>
          <Badge>{year}</Badge>
        </Flex>
        {children}
      </Container>
    </Layout>
  );
};
