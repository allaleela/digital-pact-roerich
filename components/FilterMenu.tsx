// components/FilterMenu.tsx
"use client";
import { HStack, Button } from "@chakra-ui/react";
import Link from "next/link";

const filters = [
  { label: "🎨 Искусство", href: "/articles/arttoday" },
  { label: "🧘 Жизнь в Индии", href: "/articles/indiatoday" },
  { label: "🌐 Web3 & NFT", href: "/articles/web3today" },
  { label: "📜 Наследие Рериха", href: "/articles/roerichtoday" },
  { label: "📖 Образование", href: "/articles/philosophytoday" },
];

export default function FilterMenu() {
  return (
    <HStack spacing={3} wrap="wrap">
      {filters.map((f, i) => (
        <Button
          key={i}
          as={Link}
          href={f.href}
          variant="outline"
          colorScheme="gray"
          size="sm"
        >
          {f.label}
        </Button>
      ))}
    </HStack>
  );
}
