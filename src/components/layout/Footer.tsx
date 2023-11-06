import { Text, Box, Container, chakra, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const SocialButton = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <chakra.button
      as="a"
      href={href}
      bg="blackAlpha.100"
      rounded="full"
      w="8"
      h="8"
      target="_blank"
      cursor="pointer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: "blackAlpha.400",
      }}
    >
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxWidth="container.lg"
        py="4"
        direction={{ base: "column", md: "row" }}
        spacing="6"
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text></Text>
        <Stack align="center" direction="row" spacing="4">
          <Text fontSize="sm">
            <Link href="/">Terminos y Privacidad</Link>
          </Text>
          <Text fontSize="sm">
            <Link href="/">FAQ</Link>
          </Text>
          <SocialButton href="/">
            <FaInstagram />
          </SocialButton>
          <SocialButton href="/">
            <FaTwitter />
          </SocialButton>
          <SocialButton href="/">
            <FaYoutube />
          </SocialButton>
          <SocialButton href="/">
            <MdAlternateEmail />
          </SocialButton>
          <Text
            display={{ base: "none", sm: "block" }}
            fontSize="lg"
            fontWeight="bold"
          >
            MiMesa
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
