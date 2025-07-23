// components/Header.tsx
import { Box, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";

const navItems = [
  { label: "Статьи", href: "/articles" },
  { label: "Манифест", href: "/manifesto" },
  { label: "Mint", href: "/mint" },
  { label: "Saraswati", href: "/saraswati-space" },
  { label: "Поддержка", href: "/support" },
];

export default function Header() {
  const direction = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex as="header" py={4} px={6} justify="space-between" wrap="wrap">
      <Link as={NextLink} href="/" fontWeight="bold">
        Digital Pact
      </Link>
      <Flex direction={direction} gap={4} mt={{ base: 2, md: 0 }}>
        {navItems.map((item) => (
          <Link key={item.href} as={NextLink} href={item.href}>
            {item.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
