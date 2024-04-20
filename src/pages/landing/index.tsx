import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Center } from "@chakra-ui/react";
import { PageLayout } from "@components/layout";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage: FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Center height="100%" width="100%">
        <Button
          size="lg"
          borderRadius={32}
          aria-label="Enter the app"
          rightIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/calendar")}
        >
          View calendar
        </Button>
      </Center>
    </PageLayout>
  );
};
