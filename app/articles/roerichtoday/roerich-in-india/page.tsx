"use client";
import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function RoerichIndiaPage() {
  return (
    <Layout>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">Рерих в Индии</Heading>
        <Text fontSize="md">
          Николай Рерих провёл последние годы жизни в Кулу, Индия, где основал Гималайский институт искусств.
          Его творчество в этот период сочетало духовные темы, горные пейзажи и идею культурного моста между Востоком и Западом.
        </Text>
        <Text fontSize="md">
          Здесь же он написал многие работы по философии, инициировал международные проекты по защите культуры 
          и оказал влияние на поколения индийских художников и мыслителей.
        </Text>
        <Link href="/articles/roerichtoday">
          <Button colorScheme="gray" variant="outline">← Назад к «Наследию Рериха»</Button>
        </Link>
      </VStack>
    </Layout>
  );
}
