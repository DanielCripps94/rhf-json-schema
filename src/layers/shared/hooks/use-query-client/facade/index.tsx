import { QueryClient } from "@tanstack/react-query";

export const createQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retryOnMount: false,
        refetchIntervalInBackground: false,
      },
    },
  });

  return queryClient;
};
