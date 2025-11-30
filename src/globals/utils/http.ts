// interfaces
type IHTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
interface IHTTPOptions {
  headers?: Record<string, string>;
  params?: Record<string, string>;
  credentials?: "include" | "same-origin" | "omit";
}

/*
 * Wrapper function for api calls.
 * */
export const makeRequest = async (
  method: IHTTPMethod = "GET",
  url: string,
  data: unknown | undefined | null = null,
  options: IHTTPOptions = {
    headers: {},
    params: {},
    credentials: "omit",
  },
) => {
  url = import.meta.env.VITE_API_BASE_URL + url;

  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(options?.params ?? {})) {
    queryParams.append(key, String(value));
  }

  if (queryParams.toString()) {
    url += `?${queryParams.toString()}`;
  }

  const fetchOptions: RequestInit = {
    method,
    headers: options.headers,
    credentials: options.credentials,
  };

  if (method !== "GET" && data !== null) {
    fetchOptions.body = JSON.stringify(data);
  }
  const res = await fetch(url, fetchOptions);

  return (await res.json()) ?? null;
};
