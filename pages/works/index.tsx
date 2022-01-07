import React from "react";

import { Layout } from "components/Layout";
import { Heading, Container, Flex } from "@chakra-ui/react";

import { WorkByThumb } from "components/WorkByThumb";

import { css } from "@emotion/react";

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
      gap={5}
      css={css`
        @media (max-width: 500px) {
          display: block;
          .ThumbContainer {
            width: 100%;
            margin-bottom: 15px;
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
    <Layout>
      <Container maxW="container.sm" pl={10} pr={10}>
        <Heading size="md" mb={4}>
          Works
        </Heading>
        <AutoTransformContainer>
          <WorkByThumb
            thumbInPath="/images/bisous.png"
            pjName="Bisous"
            detail="ss"
          ></WorkByThumb>
          <WorkByThumb
            thumbInPath="/images/bisous.png"
            pjName="Bisous"
            detail="ss"
          ></WorkByThumb>
        </AutoTransformContainer>
        <AutoTransformContainer>
          <WorkByThumb
            thumbInPath="/images/bisous.png"
            pjName="Bisous"
            detail="ss"
          ></WorkByThumb>
          <WorkByThumb
            thumbInPath="/images/bisous.png"
            pjName="Bisous"
            detail="ss"
          ></WorkByThumb>
        </AutoTransformContainer>
      </Container>
    </Layout>
  );
};
export default Works;
