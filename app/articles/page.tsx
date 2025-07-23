"use client";

import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import ArticleCard from "@/components/ArticleCard";

const articles = [
  { title: "Что такое ташизм?", excerpt: "Одна из самых выразительных форм абстракции в 20 веке…", href: "/articles/arttoday/page" },
  { title: "Жизнь в Дхармасале", excerpt: "Как живут художники в Индии сегодня…", href: "/articles/indiatoday/page" },
  { title: "Web3 для художников", excerpt: "Что такое децентрализованные галереи и как они работают…", href: "/articles/web3today/page" },
  { title: "Наследие Рериха", excerpt: "Почему Николай Рерих важен сегодня…", href: "/articles/roerichtoday/page" },
  { title: "Образование будущего", excerpt: "Слияние философии, ИИ и самопознания…", href: "/articles/philosophytoday/page" },
];

export default function ArticlesPage() {
  return (
    <VStack align="start" spacing={8} px={4} py={8}>
      <Heading as="h1" size="xl">Статьи</Heading>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="100%">
        {articles.map((a, i) => (
          <GridItem key={i}>
            <ArticleCard title={a.title} excerpt={a.excerpt} href={a.href} />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
}
