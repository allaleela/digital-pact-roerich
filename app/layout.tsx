import "./globals.css";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme/theme";
import Header from "./Header";
import Footer from "./Footer";
import ChakraProviders from "./ChakraProviders";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata = { title: "Современное искусство" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Container maxW="6xl" py={6} flex="1">
        {children}
      </Container>
      <Footer />
    </Box>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
    <body>
      <ChakraProviders>{children}</ChakraProviders>
    </body>
  </html>
  );
}
