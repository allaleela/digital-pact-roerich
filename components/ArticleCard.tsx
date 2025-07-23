// components/ArticleCard.tsx
import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  title: string;
  excerpt: string;
  href: string;
}

export default function ArticleCard({ title, excerpt, href }: Props) {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" _hover={{ shadow: "md" }}>
      <ChakraLink as={NextLink} href={href}>
        <Heading size="md" mb={2}>{title}</Heading>
        <Text>{excerpt}</Text>
      </ChakraLink>
    </Box>
  );
}
