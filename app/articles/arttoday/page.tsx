"use client";
import { Heading, Text, VStack } from "@chakra-ui/react";
import Layout from "@/components/Layout";

export default function ArtTodayPage() {
  return (
    <Layout>
      <VStack align="start" spacing={6}>
        <Heading as="h1" size="lg">Что такое ташизм?</Heading>
        <Text>
          Ташизм — это одно из направлений абстрактного искусства середины XX века, в котором важную роль играли жест, пятно, энергия. Это был способ выразить внутренние состояния художника напрямую, минуя форму.
        </Text>
      </VStack>
    </Layout>
  );
}

// app/articles/indiatoday/page.tsx
"use client";
import { Heading, Text, VStack } from "@chakra-ui/react";
import Layout from "@/components/Layout";

export default function IndiaTodayPage() {
  return (
    <Layout>
      <VStack align="start" spacing={6}>
        <Heading as="h1" size="lg">Жизнь в Дхармасале</Heading>
        <Text>
          Дхармасала — город в Гималаях, где живут тибетские монахи, учёные, художники и путешественники со всего мира. Это место тишины, созерцания и творческой силы.
        </Text>
      </VStack>
    </Layout>
  );
}
