"use client";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box maxW="4xl" mx="auto" px={4} py={8}>
      {children}
    </Box>
  );
}
