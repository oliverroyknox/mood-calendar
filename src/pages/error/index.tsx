import { RepeatIcon } from "@chakra-ui/icons";
import { Button, Center, Text } from "@chakra-ui/react";
import { PageLayout } from "@components/layout";
import { FC } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

export const ErrorPage: FC = () => {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();

  return (
    <PageLayout>
      <Center
        gap={8}
        height="100%"
        width="100%"
        overflow="hidden"
        flexDirection="column"
      >
        <Text>Oh no! Something went wrong.</Text>
        <Button
          size="lg"
          rightIcon={<RepeatIcon />}
          onClick={() => {
            resetBoundary();
            navigate("/");
          }}
        >
          Refresh app
        </Button>
      </Center>
    </PageLayout>
  );
};
