import logo from "@assets/mood-calendar.png";
import { HStack, Heading, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <HStack
      width="100%"
      spacing={4}
      padding={4}
      borderBottom="1px solid"
      borderColor="gray.100"
      justifyContent="center"
    >
      <Heading>Mood Calendar</Heading>
      <Image
        src={logo}
        alt="Mood calendar"
        boxSize={12}
        cursor="pointer"
        onClick={() => navigate("/")}
      />
    </HStack>
  );
};
