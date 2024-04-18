import { Center } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export const HeadingCell: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Center flex={1} paddingY={8}>
      {children}
    </Center>
  );
};
