import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { HiLogout } from "react-icons/hi";
import { IoIosGift } from "react-icons/io";

const Header = ({ session }: { session: Session | null }) => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      marginX="auto"
      maxWidth="container.lg"
      px="2"
    >
      <Flex justifyContent="space-between" py="4" as="footer">
        <Flex
          role="group"
          as={Link}
          href="/"
          alignItems="center"
          fontWeight="bold"
          fontSize="2xl"
        >
          <Icon
            transition="200ms all"
            _groupHover={{ color: "brand.600" }}
            as={IoIosGift}
          />
          <Text paddingLeft="2" display={{ base: "none", sm: "inherit" }}>
            MiMesa
          </Text>
        </Flex>
        <HStack spacing="2">
          {session ? (
            <>
              <Button href="/mismesas" as={Link} variant="brand" size="sm">
                Mis Mesas
              </Button>
              <Tooltip hasArrow label="logout">
                <IconButton
                  icon={<HiLogout />}
                  aria-label="logout"
                  size="sm"
                  colorScheme="beige"
                  variant="ghost"
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                  }}
                />
              </Tooltip>
            </>
          ) : (
            <Button href="/login" as={Link} variant="brand" size="sm">
              Login
            </Button>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
