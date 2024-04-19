import { putMoodMap } from "@api/aws";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function usePutMoodMap(
  year: number,
  onSuccess?: () => void,
  onError?: (error: Error) => void
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putMoodMap,
    onSuccess: async () => {
      return queryClient
        .invalidateQueries({ queryKey: ["mood-map", year] })
        .then(() => onSuccess?.());
    },
    onError,
  });

  return mutation;
}
