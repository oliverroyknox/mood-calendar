import logo from "@assets/mood-calendar.png";
import { useAuth0 } from "@auth0/auth0-react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, HStack, Heading, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const { resetBoundary } = useErrorBoundary();
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <HStack
      width="100%"
      spacing={4}
      padding={4}
      borderBottom="1px solid"
      borderColor="gray.100"
      justifyContent="center"
      position="relative"
    >
      <Heading>Mood Calendar</Heading>
      <Image
        src={logo}
        alt="Mood calendar"
        boxSize={12}
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
          right={8}
          rightIcon={<ExternalLinkIcon />}
          onClick={() => logout()}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="ghost"
          position="absolute"
          right={8}
          rightIcon={<ExternalLinkIcon />}
          onClick={() => loginWithRedirect()}
        >
          Login
        </Button>
      )}
    </HStack>
  );
};
