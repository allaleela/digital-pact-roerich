"use client";
import { Heading, Text, VStack } from "@chakra-ui/react";
import Layout from "@/components/Layout";

export default function RoerichTodayPage() {
  return (
    <Layout>
      <VStack align="start" spacing={6}>
        <Heading as="h1" size="lg">Пакт Рериха</Heading>
        <Text>
          Пакт Рериха — международное соглашение 1935 года, направленное на защиту культурных ценностей во время войны. Сегодня мы можем расширить его дух, защищая и цифровое искусство.
        </Text>
      </VStack>
    </Layout>
  );
}