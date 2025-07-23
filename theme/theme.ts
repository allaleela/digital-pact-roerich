import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const theme = extendTheme({
  onts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.800",
        fontSize: "md",
        lineHeight: "tall",
      },
    },
  },

  colors: {
    brand: {
      50: "#fdfcf8",
      100: "#f5f3e7",
      200: "#e7e2c4",
      300: "#d1c8a0",
      400: "#b5ab7d",
      500: "#9c9264",
      600: "#7c724e",
      700: "#5c543a",
      800: "#3c3625",
      900: "#1d190f",
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.50",
        color: "gray.800",
      },
    },
  },
});


export default theme;
