"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Error({ error }: { error: Error }) {
  return (
    <Box p={8} textAlign="center">
      <Heading mb={4} color="red.500">Произошла ошибка</Heading>
      <Text>{error?.message || "Что-то пошло не так. Попробуйте обновить страницу."}</Text>
    </Box>
  );
} 