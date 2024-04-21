import logo from "@assets/mood-calendar.png";
import { useAuth0 } from "@auth0/auth0-react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Heading,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { FC } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const { resetBoundary } = useErrorBoundary();
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <HStack
      width="100%"
      spacing={isLargerThan800 ? 4 : 2}
      padding={4}
      borderBottom="1px solid"
      borderColor="gray.100"
      justifyContent={isLargerThan800 ? "center" : undefined}
      position="relative"
    >
      <Heading size={isLargerThan800 ? undefined : "sm"}>Mood Calendar</Heading>
      <Image
        src={logo}
        alt="Mood calendar"
        boxSize={isLargerThan800 ? 12 : 6}
        cursor="pointer"
        onClick={() => {
          resetBoundary();
          navigate("/");
        }}
      />
      {isAuthenticated ? (
        <Button
          variant="ghost"
          position="absolute"
          right={isLargerThan800 ? 8 : 2}
          rightIcon={<ExternalLinkIcon />}
          onClick={() => logout()}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="ghost"
          position="absolute"
          right={isLargerThan800 ? 8 : 2}
          rightIcon={<ExternalLinkIcon />}
          onClick={() => loginWithRedirect()}
        >
          Login
        </Button>
      )}
    </HStack>
  );
};
