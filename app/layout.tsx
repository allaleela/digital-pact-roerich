import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChakraProviders from "./ChakraProviders";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata = { title: "Современное искусство" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <ChakraProviders>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main style={{ flex: 1, maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "24px 0" }}>
              {children}
            </main>
            <Footer />
          </div>
        </ChakraProviders>
      </body>
    </html>
  );
}
