"use client";
import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import Link from "next/link";

export default function DecentralizedArtPage() {
  return (
    <Layout>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">Децентрализованное искусство</Heading>
        <Text fontSize="md">
          В Web3 художники могут напрямую взаимодействовать с аудиторией, минуя галереи, кураторов и цензуру.
          Децентрализация открывает новые модели монетизации, самоуправления и глобальной кооперации.
        </Text>
        <Text fontSize="md">
          Это не просто технология, а новый культурный код, где ценность создаётся через сообщество и прозрачность.
        </Text>
        <Link href="/articles/web3today">
          <Button colorScheme="gray" variant="outline">← Назад к «Web3 & NFT»</Button>
        </Link>
      </VStack>
    </Layout>
  );
}
