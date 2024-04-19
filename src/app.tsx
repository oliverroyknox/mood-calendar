import { useToast } from "@chakra-ui/react";
import { Calendar } from "@components/calendar";
import { Indicator } from "@components/indicator";
import { MoodPopover } from "@components/mood-popover";
import { IndexedDate } from "@custom-types/date";
import { Mood, MoodMap } from "@custom-types/mood";
import { usePutMoodMap } from "@hooks/mutations";
import { useGetMoodMap } from "@hooks/queries";
import moment from "moment";
import { FC, useState } from "react";

export const App: FC = () => {
  const [year, setYear] = useState(moment().year());

  const toast = useToast();

  const { data } = useGetMoodMap(year);
  const { mutate } = usePutMoodMap(year, undefined, (error) => {
    toast({
      title: "Oh no! Something went wrong.",
      description: error.message,
      duration: 5000,
      position: "top",
      status: "error",
    });
  });

  return (
    <Calendar
      popover={
        <MoodPopover
          onClick={(mood, context) => {
            const { day, month, year } = context as IndexedDate;

            const moodMap: MoodMap = {
              year,
              ...data,
              [month]: {
                ...data?.[month],
                [day]: mood,
              },
            };

            mutate(moodMap);
          }}
        />
      }
      renderData={(date) => {
        const mood = data?.[date.month]?.[date.day];

        if (mood === undefined) return null;

        const colors = {
          [Mood.HAPPY]: "green.400",
          [Mood.FINE]: "yellow.400",
          [Mood.SAD]: "red.400",
        }[mood];

        return (
          <Indicator
            position="absolute"
            pointerEvents="none"
            bottom="10%"
            background={colors}
          />
        );
      }}
      onChange={({ year }) => setYear(year)}
    />
  );
};
