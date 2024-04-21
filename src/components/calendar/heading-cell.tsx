import { Center, GridItem } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export const HeadingCell: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GridItem as={Center} height="100%">
      {children}
    </GridItem>
  );
};
