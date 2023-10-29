"use client";

import theme from "@/styles/theme";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();
export const inter = Inter({ subsets: ["latin"] });

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Flex className={inter.className} flexDirection="column" minH="100vh">
            <Header session={session} />
            {children}
            <Footer />
            <Analytics />
          </Flex>
        </QueryClientProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}
