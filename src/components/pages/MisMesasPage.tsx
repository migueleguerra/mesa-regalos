"use client";

import { Box, Button, Heading } from "@chakra-ui/react";
import PageContainer from "../layout/PageContainer";
import { IoIosGift } from "react-icons/io";
import Link from "next/link";

export default function MisMesasPage() {
  return (
    <PageContainer>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading as="h2" mb="4" fontWeight="semibold" fontSize="2xl">
          Todavía no tienes una mesa de regalos
        </Heading>
        <Button
          as={Link}
          href="/crearmesa"
          fontWeight="semibold"
          fontSize="xl"
          variant="brand"
          rightIcon={<IoIosGift />}
        >
          Crea tu mesa de regalos
        </Button>
      </Box>
    </PageContainer>
  );
}
