import { Box, BoxProps } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export const Pressable: FC<PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => {
  return (
    <Box
      width="full"
      padding={4}
      borderRadius={8}
      cursor="pointer"
      transition="background 300ms ease"
      _hover={{ background: "gray.50" }}
      _active={{ background: "gray.100" }}
      {...props}
    >
      {children}
    </Box>
  );
};
