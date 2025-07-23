"use client";
import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function TachismePage() {
  return (
    <Layout>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">Ташизм</Heading>
        <Text fontSize="md">
          Ташизм — направление абстрактного искусства, возникшее во Франции в 1940–1950-х годах. 
          Название происходит от французского слова *tache* — «пятно». Художники ташизма 
          стремились выразить эмоциональное состояние через спонтанные мазки, пятна и текстуры.
        </Text>
        <Text fontSize="md">
          Это направление часто связывают с автоматизмом, восточной каллиграфией и 
          философией экзистенциализма. Работы ташистов ценятся за энергетичность, внутреннюю свободу и глубину.
        </Text>
        <Link href="/articles/arttoday">
          <Button colorScheme="gray" variant="outline">← Назад к разделу «Искусство»</Button>
        </Link>
      </VStack>
    </Layout>
  );
}
