"use client";
import { Heading, Text, VStack } from "@chakra-ui/react";
import Layout from "../../../components/Layout";

export default function Web3TodayPage() {
  return (
    <Layout>
      <VStack align="start" spacing={6}>
        <Heading as="h1" size="lg">Децентрализованное искусство</Heading>
        <Text>
          Web3 даёт художнику свободу и контроль: мы больше не зависим от галерей или рынков. Мы сами строим свои сообщества, свою репутацию, свою систему ценностей.
        </Text>
      </VStack>
    </Layout>
  );
}