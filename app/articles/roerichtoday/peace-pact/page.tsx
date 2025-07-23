"use client";
import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function PeacePactPage() {
  return (
    <Layout>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">Пакт Рериха</Heading>
        <Text fontSize="md">
          Пакт Рериха — международное соглашение 1935 года о защите культурных ценностей во время военных конфликтов.
          Это был первый в истории договор, защищающий музеи, библиотеки, памятники и школы.
        </Text>
        <Text fontSize="md">
          Инициатором выступил Николай Рерих, художник, путешественник и гуманист. Пакт стал основой для
          будущих международных конвенций ЮНЕСКО.
        </Text>
        <Link href="/articles/roerichtoday">
          <Button colorScheme="gray" variant="outline">← Назад к «Наследию Рериха»</Button>
        </Link>
      </VStack>
    </Layout>
  );
}