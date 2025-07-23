"use client";
import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function WhatIsNFTPage() {
  return (
    <Layout>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">Что такое NFT?</Heading>
        <Text fontSize="md">
          NFT (невзаимозаменяемый токен) — это уникальный цифровой актив, существующий в блокчейне. 
          Он может представлять произведение искусства, музыку, видео или любой другой объект.
        </Text>
        <Text fontSize="md">
          Главное отличие NFT от других токенов — уникальность и проверяемая принадлежность. 
          Они используются для поддержки авторского права, цифровых коллекций и создания новых форм собственности.
        </Text>
        <Link href="/articles/web3today">
          <Button colorScheme="gray" variant="outline">← Назад к разделу «Web3 & NFT»</Button>
        </Link>
      </VStack>
    </Layout>
  );
}
