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
import { HiLogout } from "react-icons/hi";

const Header = ({ session }: { session: Session | null }) => {
  return (
    <Flex>
      <Flex>
        <Flex>
          <Icon />
          <Text>MiMesa.</Text>
        </Flex>
        <HStack>
          {session ? (
            <>
              <Button>Dashboard</Button>
              <Tooltip>
                <IconButton icon={<HiLogout />} aria-label="logout" />
              </Tooltip>
            </>
          ) : (
            <Button>Login</Button>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
