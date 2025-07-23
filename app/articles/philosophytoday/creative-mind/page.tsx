"use client";
import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function CreativeMindPage() {
  return (
    <Layout>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">Философия творчества</Heading>
        <Text fontSize="md">
          Творческий акт — это не только художественный процесс, но и форма познания, медитации и самовыражения.
        </Text>
        <Text fontSize="md">
          Философия творчества включает идеи свободы, интуиции, красоты и духовного поиска. Она помогает нам
          осмыслить, зачем мы создаём и как это влияет на мир вокруг.
        </Text>
        <Link href="/articles/philosophytoday">
          <Button colorScheme="gray" variant="outline">← Назад к «Философии»</Button>
        </Link>
      </VStack>
    </Layout>
  );
}