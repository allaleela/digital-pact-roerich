"use client";
import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function DharamshalaPage() {
  return (
    <Layout>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">Жизнь в Дхармасале</Heading>
        <Text fontSize="md">
          Дхармасала — небольшой город в штате Химачал-Прадеш, Индия, ставший духовным и
          культурным центром благодаря пребыванию здесь Далай-ламы и тибетского правительства в изгнании.
        </Text>
        <Text fontSize="md">
          Сегодня Дхармасала — это также точка притяжения для художников, йогов, философов и исследователей Востока.
          Здесь смешиваются культуры, медитативные практики и современные арт-инициативы.
        </Text>
        <Link href="/articles/indiatoday">
          <Button colorScheme="gray" variant="outline">← Назад к «Жизни в Индии»</Button>
        </Link>
      </VStack>
    </Layout>
  );
}