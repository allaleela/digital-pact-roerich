// components/Layout.tsx
"use client";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box bg="white" color="black" fontFamily="Inter, sans-serif">
      <Header />
      <Container maxW="4xl" py={8}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
