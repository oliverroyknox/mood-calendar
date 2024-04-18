import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Center, GridItem, IconButton, Text } from "@chakra-ui/react";
import moment from "moment";
import { Dispatch, FC, Fragment, SetStateAction } from "react";

interface HeaderProps {
  month: string;
  setMonth: Dispatch<SetStateAction<string>>;
}

export const Header: FC<HeaderProps> = ({ month, setMonth }) => {
  return (
    <Fragment>
      <GridItem as={Center} colSpan={1} paddingY={8}>
        <Center flex={0.25} aspectRatio={1}>
          <IconButton
            variant="ghost"
            height="full"
            width="full"
            borderRadius="50%"
            aria-label="Go back a month"
            icon={<ArrowBackIcon />}
            onClick={() => {
              setMonth((month) =>
                moment(month).subtract(1, "month").toISOString()
              );
            }}
          />
        </Center>
      </GridItem>
      <GridItem as={Center} colSpan={5} paddingY={8}>
        <Text fontWeight={800}>{moment(month).format("MMMM yyyy")}</Text>
      </GridItem>
      <GridItem as={Center} colSpan={1} paddingY={8}>
        <Center flex={0.25} aspectRatio={1}>
          <IconButton
            variant="ghost"
            height="full"
            width="full"
            borderRadius="50%"
            aria-label="Go forward a month"
            icon={<ArrowForwardIcon />}
            onClick={() => {
              setMonth((month) => moment(month).add(1, "month").toISOString());
            }}
          />
        </Center>
      </GridItem>
    </Fragment>
  );
};
