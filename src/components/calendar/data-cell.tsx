import { Center } from "@chakra-ui/react";
import { PropsWithChildren, cloneElement } from "react";

interface DataCellProps<T> {
  data: T;
  disabled?: boolean;
  popover?: JSX.Element;
  onClick?: (data: T) => void;
}

export const DataCell = <T,>({
  data,
  disabled,
  popover,
  onClick,
  children,
}: PropsWithChildren<DataCellProps<T>>) => {
  function withPopover(element: JSX.Element) {
    if (!popover || disabled) return element;
    return cloneElement(popover, { context: data, children: element });
  }

  return (
    <Center
      height="full"
      width="full"
      paddingY={8}
      borderColor="gray.200"
      position="relative"
    >
      {withPopover(
        <Center
          flex={0.25}
          aspectRatio={1}
          minWidth={8}
          minHeight={8}
          transition="background 300ms ease"
          borderRadius="50%"
          userSelect="none"
          color={disabled ? "gray" : undefined}
          cursor={disabled ? undefined : "pointer"}
          _hover={disabled ? undefined : { background: "gray.100" }}
          _active={disabled ? undefined : { background: "gray.200" }}
          onClick={() => (disabled ? null : onClick?.(data))}
        >
          {children}
        </Center>
      )}
    </Center>
  );
};
