import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box p={8} textAlign="center">
      <Heading mb={4} color="teal.500">404</Heading>
      <Text mb={6}>Страница не найдена.</Text>
      <Button as={Link} href="/" colorScheme="teal">
        На главную
      </Button>
    </Box>
  );
} 