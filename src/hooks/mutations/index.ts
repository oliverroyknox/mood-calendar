import { putMoodMap } from "@api/aws";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function usePutMoodMap(
  year: number,
  onSuccess?: () => void,
  onError?: (error: Error) => void
) {
  const { isAuthenticated } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: isAuthenticated
      ? putMoodMap
      : () =>
          Promise.reject(
            new Error("You must be logged in to edit the calendar.")
          ),
    onSuccess: async () => {
      return queryClient
        .invalidateQueries({ queryKey: ["mood-map", year] })
        .then(() => onSuccess?.());
    },
    onError,
  });

  return mutation;
}
