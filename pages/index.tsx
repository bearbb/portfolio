import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Heading, Container, Flex, Text } from "@chakra-ui/react";

//components
import { Layout } from "components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.sm">
        <Head>
          <meta name="viewport" content="width=device-width initial-scale=1" />
          <title>Hieu Nguyen</title>
        </Head>
        {/* description */}

        <Flex flexDir="column" gap={1}>
          <Heading
            as="h1"
            size="xl"
            fontFamily="M PLUS Rounded 1c"
            fontWeight="700"
          >
            Hieu Nguyen
          </Heading>
          <Text>This is a simple description about me</Text>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;
