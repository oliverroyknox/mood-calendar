import { getMoodMap } from "@api/aws";
import { useQuery } from "@tanstack/react-query";

export function useGetMoodMap(year: number) {
  const query = useQuery({
    queryFn: () => getMoodMap(year),
    queryKey: ["mood-map", year],
  });

  return { ...query, data: query.data?.item };
}
