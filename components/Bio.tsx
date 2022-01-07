import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

interface BioProps {
  year: string;
  detail: string;
}

const Bio = ({ year, detail }: BioProps) => {
  return (
    <Flex gap={4} mb={2}>
      <Text fontWeight="bold">{year}</Text>
      <Text>{detail}</Text>
    </Flex>
  );
};

export const Bios = () => {
  return (
    <Flex flexDir="column">
      <Bio
        year="2000"
        detail="Born in Cu Jut (Dak Nong province), Vietnam."
      ></Bio>
      <Bio
        year="2018"
        detail="Completed Hong Duc high school in Buon Ma Thuot city, Dak Lak."
      ></Bio>
      <Bio
        year="2018 to present"
        detail="Studying at University of Information Technology, Information and Software Engineering (ISE) major."
      ></Bio>
    </Flex>
  );
};
