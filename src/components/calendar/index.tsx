import { SimpleGrid, Text } from "@chakra-ui/react";
import moment from "moment";
import { FC, useEffect, useMemo, useState } from "react";

import { DataCell } from "./data-cell";
import { HeadingCell } from "./heading-cell";
import { Header } from "./header";
import { IndexedDate } from "@custom-types/date";

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface CalendarProps {
  popover?: JSX.Element;
  onClick?: (date: IndexedDate) => void;
  onChange?: (date: Omit<IndexedDate, "day">) => void;
}

export const Calendar: FC<CalendarProps> = ({ popover, onClick, onChange }) => {
  const [month, setMonth] = useState<string>(moment().toISOString());

  const days = useMemo(() => {
    const days: Array<string> = [];

    const date = moment(month);
    const numberOfDays = date.daysInMonth();
    const entry = date.startOf("month");

    for (let i = 1; i <= numberOfDays; i++) {
      days.push(entry.format("ddd"));
      entry.add(1, "day");
    }

    return days;
  }, [month]);

  const pad = DAY_NAMES.indexOf(days[0] as string);

  const cells = useMemo(() => {
    return [...new Array(pad).fill(null), ...days];
  }, [days, pad]);

  useEffect(() => {
    if (!onChange) return;

    const parsed = moment(month);
    onChange({ month: parsed.get("month") + 1, year: parsed.get("year") });
  }, [month, onChange]);

  return (
    <SimpleGrid columns={7} height="full" width="full">
      <Header month={month} setMonth={setMonth} />
      {DAY_NAMES.map((day) => {
        return (
          <HeadingCell key={day}>
            <Text fontWeight={600}>{day}</Text>
          </HeadingCell>
        );
      })}
      {cells.map((item, index) => {
        const dayIndex = index + 1 - pad;
        const date = moment(month).set("date", dayIndex);
        const disabled = !item || date.isAfter(moment());

        const data = {
          day: dayIndex,
          month: moment(month).get("month") + 1,
          year: moment(month).get("year"),
        };

        return (
          <DataCell
            key={index}
            disabled={disabled}
            popover={popover}
            data={data}
            onClick={onClick}
          >
            {item ? <Text fontWeight={600}>{dayIndex}</Text> : null}
          </DataCell>
        );
      })}
    </SimpleGrid>
  );
};
