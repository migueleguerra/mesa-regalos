import { getEmailProvider } from "@/core/utils/mail";
import {
  Text,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Icon,
  Link,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdCheckCircleOutline } from "react-icons/md";
import { useMutation } from "react-query";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const {
    mutate: login,
    isLoading,
    isSuccess,
  } = useMutation("login", () =>
    signIn("email", { email, redirect: false, callbackUrl: "/mismesas" })
  );

  if (isSuccess) {
    const { name, url } = getEmailProvider(email);

    return (
      <Box ms={{ base: 4, md: 0 }} textAlign="center">
        <Heading>
          Revisa tu correo <Icon as={MdCheckCircleOutline} mb="-4px" />
        </Heading>
        <Text maxWidth="30rem" mt="3" fontSize="2xl">
          Un <b>enlace de sign in</b> fue enviado a tu correo.{" "}
          {name && url && (
            <>
              Revisa{" "}
              <Link textDecoration="underline" isExternal href={url}>
                tu {name} inbox
              </Link>
            </>
          )}
        </Text>
      </Box>
    );
  }

  return (
    <Stack spacing="4" width="100%" mx="auto" maxW="md" py="12" px="6">
      <Stack textAlign="center" spacing="0">
        <Text fontWeight="extrabold" as="h2" fontSize="4xl">
          Sign in a MiMesa
        </Text>
        <Text fontSize="lg">Usa tu correo para acceder</Text>
      </Stack>
      <Box rounded="lg" bg="white" boxShadow="lg" p="8">
        <Stack
          as="form"
          spacing="4"
          onSubmit={async (e) => {
            e.preventDefault();
            if (email) {
              login();
            }
          }}
        >
          <FormControl id="email">
            <FormLabel>Tu correo</FormLabel>
            <Input
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              placeholder="mike@gmail.com"
            />
          </FormControl>
          <Stack spacing="10">
            <Button
              isLoading={isLoading}
              rightIcon={<FaPaperPlane />}
              type="submit"
              variant="brand"
            >
              Enviar enlace
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
