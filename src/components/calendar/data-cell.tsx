import { Button, Center, GridItem } from "@chakra-ui/react";
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
    <GridItem
      as={Center}
      height="full"
      width="full"
      position="relative"
      rowSpan={2}
    >
      {withPopover(
        <Button
          variant="ghost"
          size="lg"
          aspectRatio={1}
          isDisabled={disabled}
          onClick={() => onClick?.(data)}
        >
          {children}
        </Button>
      )}
    </GridItem>
  );
};
