import { useState, useCallback } from "react";

interface Config {
  method: string;
  url: string;
  headers?: HeadersInit;
}

interface Result<D> {
  data: D;
  error: string;
  isLoading: boolean;
}

type Callee = (data?: unknown) => void;

export function useApi<D = unknown>(config: Config): [Result<D>, Callee] {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<D>();

  const callApi: Callee = useCallback(
    async (data?: unknown) => {
      try {
        setIsLoading(true);
        const { method, url, headers } = config;
        const response = await fetch(url, {
          method,
          body: JSON.stringify(data),
          headers,
        });

        if (!response.ok) {
          throw await response.json();
        }

        setError("");
        const result = await response.json();
        setData(result);
      } catch (e) {
        const message: string = Array.isArray(e.message)
          ? e.message[0]
          : e.message;
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    [config]
  );

  const result: Result<D> = {
    data: data as D,
    error,
    isLoading,
  };

  return [result, callApi];
}
