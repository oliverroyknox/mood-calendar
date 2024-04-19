import {
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Indicator } from "@components/indicator";
import { Pressable } from "@components/pressable";
import { Mood } from "@enums/mood";
import { FC, PropsWithChildren } from "react";

import { CloseButton } from "./close-button";

const style = {
  option: {
    justifyContent: "space-between",
    _hover: { background: "gray.100" },
    _active: { background: "gray.200" },
  },
};

export const MoodPopover: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Popover>
      {({ onClose }) => {
        const onClick = (mood: Mood) => {
          console.log({ mood });
          onClose();
        };

        return (
          <>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent
              marginX={16}
              border="none"
              shadow="none"
              boxShadow="none !important"
              background="gray.50"
            >
              <PopoverArrow
                css={{
                  "--popper-arrow-bg": "var(--chakra-colors-gray-50)",
                  "--popper-arrow-shadow-color":
                    "var(--chakra-colors-gray-100)",
                }}
              />
              <PopoverHeader border="none" paddingBottom={0}>
                <HStack justifyContent="space-between">
                  <Text paddingLeft={2} fontWeight={600}>
                    Choose your mood
                  </Text>
                  <CloseButton />
                </HStack>
              </PopoverHeader>
              <PopoverBody paddingX={4} paddingBottom={4}>
                <VStack alignItems="flex-start" spacing={0}>
                  <Pressable
                    as={HStack}
                    {...style.option}
                    onClick={() => onClick(Mood.HAPPY)}
                  >
                    <Text>Happy</Text>
                    <Indicator background="green.400" />
                  </Pressable>
                  <Pressable
                    as={HStack}
                    {...style.option}
                    onClick={() => onClick(Mood.FINE)}
                  >
                    <Text>Fine</Text>
                    <Indicator background="yellow.400" />
                  </Pressable>
                  <Pressable
                    as={HStack}
                    {...style.option}
                    onClick={() => onClick(Mood.SAD)}
                  >
                    <Text>Sad</Text>
                    <Indicator background="red.400" />
                  </Pressable>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </>
        );
      }}
    </Popover>
  );
};
