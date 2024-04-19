import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

export const Indicator: FC<BoxProps> = ({ ...props }) => {
  return (
    <Box boxSize={4} borderRadius="50%" background="gray.400" {...props} />
  );
};
