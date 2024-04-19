import { MinusIcon } from "@chakra-ui/icons";
import { IconButton, PopoverCloseButton } from "@chakra-ui/react";
import { FC } from "react";

export const CloseButton: FC = () => {
  return (
    <IconButton
      as={PopoverCloseButton}
      position="relative"
      top={0}
      right={0}
      variant="ghost"
      borderRadius="50%"
      aria-label="Close popover"
      icon={<MinusIcon boxSize={2.5} />}
    />
  );
};
