import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" p={4} bg="gray.700" color="white" textAlign="center">
      <Text fontSize="sm">© {new Date().getFullYear()} Все права защищены</Text>
    </Box>
  );
} 