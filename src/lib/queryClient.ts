import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 오래된 데이터라는 뜻. 얼마나 갖고있을건지(시간지나면 refetch 함)
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
});
