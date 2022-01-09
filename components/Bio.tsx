import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

interface BioProps {
  year: string;
  detail: string;
}

const Bio = ({ year, detail }: BioProps) => {
  return (
    // <Flex gap={4} mb={2}>
    <Box mb={2}>
      {/* <Text fontWeight="bold">{year}</Text> */}
      <p>
        <b>{year}</b>
        {"   " + detail}
      </p>
      {/* <Text>{detail}</Text> */}
    </Box>
    // </Flex>
  );
};

export const Bios = () => {
  return (
    <Flex flexDir="column" justifyContent="flex-start" w="100%">
      {/* <Bio
        year="2000"
        detail="Born in Cu Jut (Dak Nong province), Vietnam."
      ></Bio> */}
      <Box mb={2}>
        {/* <Text fontWeight="bold">{year}</Text> */}
        <p>
          <b>2018 - present: </b>
        </p>
        <p>University of Information Technology, VNU-HCM</p>
        <p>Major: Information and Software Engineering (ISE)</p>
        <p>GPA: 7.29</p>
        {/* <Text>{detail}</Text> */}
      </Box>

      <Bio year="2015 - 2018:" detail="Hong Duc High School"></Bio>

      {/* <Bio
        year="2018 to present"
        detail="University of Information Technology Major Information and Software Engineering (ISE). "
      ></Bio> */}
    </Flex>
  );
};
