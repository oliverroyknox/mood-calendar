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
      <GridItem as={Center} colSpan={1} height="100%">
        <IconButton
          variant="ghost"
          size="lg"
          aria-label="Go back a month"
          icon={<ArrowBackIcon />}
          onClick={() => {
            setMonth((month) =>
              moment(month).subtract(1, "month").toISOString()
            );
          }}
        />
      </GridItem>
      <GridItem as={Center} colSpan={5} height="100%">
        <Text fontWeight={800}>{moment(month).format("MMMM yyyy")}</Text>
      </GridItem>
      <GridItem as={Center} colSpan={1} height="100%">
        <IconButton
          variant="ghost"
          size="lg"
          aria-label="Go forward a month"
          icon={<ArrowForwardIcon />}
          onClick={() => {
            setMonth((month) => moment(month).add(1, "month").toISOString());
          }}
        />
      </GridItem>
    </Fragment>
  );
};
