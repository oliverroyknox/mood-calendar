import { Center } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface DataCellProps<T> {
  data: T;
  disabled?: boolean;
  onClick: (data: T) => void;
}

export const DataCell = <T,>({
  data,
  disabled,
  onClick,
  children,
}: PropsWithChildren<DataCellProps<T>>) => {
  return (
    <Center height="full" width="full" paddingY={8}>
      <Center
        flex={0.25}
        aspectRatio={1}
        transition="background 300ms ease"
        borderRadius="50%"
        userSelect="none"
        color={disabled ? "gray" : undefined}
        cursor={disabled ? undefined : "pointer"}
        _active={
          disabled
            ? undefined
            : {
                background: "lightblue",
                color: "white",
              }
        }
        onClick={() => (disabled ? null : onClick(data))}
      >
        {children}
      </Center>
    </Center>
  );
};
