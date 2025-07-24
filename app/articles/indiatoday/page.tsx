"use client";
import { VStack, Heading, Grid, GridItem } from "@chakra-ui/react";
import Layout from "../../../components/Layout";
import ArticleCard from "../../../components/ArticleCard";

const articles = [
  {
    title: "Жизнь в Дхармасале",
    excerpt: "Как живут художники в горах, среди тибетских монастырей…",
    href: "/articles/indiatoday/dharamshala",
  },
  {
    title: "Почему Индия вдохновляет?",
    excerpt: "Истории путешественников и мистиков.",
    href: "/articles/indiatoday/why-india",
  },
];

export default function IndiaTodayPage() {
  return (
    <Layout>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="xl">🧘 Жизнь в Индии</Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="100%">
          {articles.map((a, i) => (
            <GridItem key={i}>
              <ArticleCard {...a} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Layout>
  );
}
