import React from "react";

import { Center, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import { css } from "@emotion/react";

interface WorkByThumbProps {
  thumbInPath: string;
  pjName: string;
  detail: string;
}

export const WorkByThumb = ({
  thumbInPath,
  pjName,
  detail,
}: WorkByThumbProps) => {
  const ThumbImage = () => (
    <Image width="500px" height="280px" src={thumbInPath} alt="bisous"></Image>
  );
  return (
    <Center flexDir="column" className="ThumbContainer" flex="1" w="45%">
      <Box
        id="ThumbImgContainer"
        rounded={8}
        css={css`
          img {
            border-radius: 14px;
          }
        `}
      >
        <ThumbImage></ThumbImage>
      </Box>
      <Text as="h3" fontWeight="semibold" fontSize="xl">
        {pjName}
      </Text>
      <Text>{detail}</Text>
    </Center>
  );
};
