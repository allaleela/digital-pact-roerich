"use client";
// components/Header.tsx
import { Box, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Статьи", href: "/articles" },
  { label: "Манифест", href: "/manifesto" },
  { label: "Mint", href: "/mint" },
  { label: "Saraswati", href: "/saraswati-space" },
  { label: "Поддержка", href: "/support" },
];

export default function Header() {
  const direction = useBreakpointValue({ base: "column", md: "row" });

  const pathname = usePathname();
  <Link
    href="/articles"
    className={pathname.startsWith("/articles") ? "active-link" : ""}
  >
    Статьи
  </Link>

  return (
    <Flex as="header" py={4} px={6} justify="space-between" wrap="wrap">
      <Link as={NextLink} href="/" fontWeight="bold">
        Digital Pact
      </Link>
      <Flex gap={4} mt={{ base: 2, md: 0 }}>
        {navItems.map((item) => (
          <Link key={item.href} as={NextLink} href={item.href}>
            {item.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
