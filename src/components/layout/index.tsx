import { Box, Fade, VStack } from "@chakra-ui/react";
import { Header } from "@components/header";
import { FC, PropsWithChildren } from "react";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <VStack spacing={0} height="100vh" width="100vw">
      <Header />
      <Box height="100%" width="100%" padding={4} overflowX="hidden">
        <Fade
          in
          unmountOnExit
          transition={{ enter: { delay: 0.6 } }}
          style={{ height: "100%", width: "100%" }}
        >
          {children}
        </Fade>
      </Box>
    </VStack>
  );
};
