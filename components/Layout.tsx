import React from "react";

import { Flex, Container, Box } from "@chakra-ui/react";

import { Nav } from "components/Nav";

interface LayoutProps {
  children: React.ReactChild;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box p={20}>
      <Nav />
      {children}
    </Box>
  );
};
