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
  return <chakra.button href={href}>{children}</chakra.button>;
};

export default function Footer() {
  return (
    <Box>
      <Container>
        <Text></Text>
        <Stack>
          <Text>
            <Link href="/">Terminos y Privacidad</Link>
          </Text>
          <Text>
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
            MiMesa.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
