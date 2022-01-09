import React from "react";

import { Layout } from "components/Layout";
import { Heading, Container, Flex } from "@chakra-ui/react";

import { WorkByThumb } from "components/WorkByThumb";

import { css } from "@emotion/react";
import Head from "next/head";

import { Article } from "components/article";

const AutoTransformContainer = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) => {
  return (
    <Flex
      id="container"
      flexWrap="wrap"
      justifyContent="space-between"
      mb={8}
      gap={5}
      css={css`
        @media (max-width: 750px) {
          display: block;
          .ThumbContainer {
            width: 100%;
          }
          #ThumbImgContainer {
            width: 100%;
          }
        }
      `}
    >
      {children}
    </Flex>
  );
};

export const Works = () => {
  return (
    <Layout title="Works - Hieu Nguyen">
      <Container maxW="container.sm" pl={10} pr={10}>
        <Heading size="md" mb={4}>
          Works
        </Heading>
        <AutoTransformContainer>
          <WorkByThumb
            path="bisous"
            thumbInPath="/images/bisous.png"
            pjName="Bisous"
            detail="A social network website where users can share their images and status, Interact with others"
          ></WorkByThumb>
          <WorkByThumb
            path="monopoly"
            thumbInPath="/images/monopoly.png"
            pjName="Monopoly game"
            detail="An online web game simulating boardgame for multiplayer"
          ></WorkByThumb>
        </AutoTransformContainer>
        <AutoTransformContainer>
          <WorkByThumb
            path="portfolio"
            thumbInPath="/images/portfolio.png"
            pjName="Portfolio"
            detail="Personal portfolio - inspired by Takuya Matsuyama (craftz.dog)"
          ></WorkByThumb>
          <WorkByThumb
            path=""
            thumbInPath="/images/coming-soon.jpg"
            pjName="Upcoming"
            detail="Still in idea creating"
          ></WorkByThumb>
        </AutoTransformContainer>
      </Container>
    </Layout>
  );
};
export default Works;
