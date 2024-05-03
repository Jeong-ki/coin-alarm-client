import { QueryClient } from "@tanstack/react-query";

export const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // 요칭 실패 시 재요청 횟수
        // throwOnError: true, // ErrorBoundrary 설정
      },
    },
  });

let clientQueryClient: QueryClient | undefined;

export const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: 항상 새 QueryClient 생성
    return makeQueryClient();
  }
  // Browser: 없는 경우에 QueryClient 생성
  if (!clientQueryClient) clientQueryClient = makeQueryClient();
  return clientQueryClient;
};
