import React from "react";

import { Center, Box, Flex, Text, Img } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { css } from "@emotion/react";

interface WorkByThumbProps {
  thumbInPath: string;
  pjName: string;
  detail: string;
  path: string;
}

export const WorkByThumb = ({
  thumbInPath,
  pjName,
  detail,
  path,
}: WorkByThumbProps) => {
  const ThumbImage = () => (
    <Img src={thumbInPath} alt={pjName} rounded={8}></Img>
  );
  return (
    <Link href={`/works/${path}`} passHref={true}>
      <Flex
        flexDir="column"
        className="ThumbContainer"
        flex="1 1 0"
        w="45%"
        alignItems="center"
        cursor="pointer"
        mb={8}
      >
        <Box id="ThumbImgContainer" mb={4}>
          <ThumbImage></ThumbImage>
        </Box>
        <Text as="h3" fontWeight="semibold" fontSize="xl">
          {pjName}
        </Text>
        <Text textAlign="center">{detail}</Text>
      </Flex>
    </Link>
  );
};
