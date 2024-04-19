import { getMoodMap } from "@api/aws/getMoodMap";
import { putMoodMap } from "@api/aws/putMoodMap";
import { ChakraProvider } from "@chakra-ui/react";
import { Calendar } from "@components/calendar";
import { MoodPopover } from "@components/mood-popover";
import { IndexedDate } from "@custom-types/date";
import { MoodMap } from "@custom-types/mood";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { FC, useState } from "react";

export const App: FC = () => {
  const [year, setYear] = useState(moment().year());

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryFn: () => getMoodMap(year),
    queryKey: ["mood-map", year],
  });

  const { mutate } = useMutation({
    mutationFn: putMoodMap,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: ["mood-map", year] });
    },
    onError: (err) => {
      console.log("error", err);
    },
  });

  return (
    <ChakraProvider>
      <Calendar
        popover={
          <MoodPopover
            onClick={(mood, context) => {
              const { day, month, year } = context as IndexedDate;

              const moodMap: MoodMap = {
                year,
                ...data?.item,
                [month]: {
                  ...data?.item?.[month],
                  [day]: mood,
                },
              };

              mutate(moodMap);
            }}
          />
        }
        onChange={({ year }) => setYear(year)}
      />
    </ChakraProvider>
  );
};
