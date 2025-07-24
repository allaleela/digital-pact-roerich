"use client";
import { Heading, Text, VStack } from "@chakra-ui/react";
import Layout from "../../../components/Layout";

export default function PhilosophyTodayPage() {
  return (
    <Layout>
      <VStack align="start" spacing={6}>
        <Heading as="h1" size="lg">Философия творчества</Heading>
        <Text>
          Быть художником в эпоху Web3 — значит соединять мышление философа, ответственность гражданина и свободу мечтателя. Мы создаём смыслы, а не просто изображения.
        </Text>
      </VStack>
    </Layout>
  );
}