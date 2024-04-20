import logo from "@assets/mood-calendar.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Fade,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage: FC = () => {
  const navigate = useNavigate();

  return (
    <VStack height="100vh" width="100vw">
      <HStack spacing={4} padding={4}>
        <Heading>Mood Calendar</Heading>
        <Image src={logo} alt="Mood calendar" boxSize={12} />
      </HStack>
      <Center height="100%" width="100%">
        <Fade in unmountOnExit transition={{ enter: { delay: 1 } }}>
          <Button
            margin={32}
            size="lg"
            borderRadius={32}
            aria-label="Enter the app"
            rightIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/calendar")}
          >
            View calendar
          </Button>
        </Fade>
      </Center>
    </VStack>
  );
};
