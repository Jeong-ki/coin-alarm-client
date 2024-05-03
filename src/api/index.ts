import { METHOD } from "@/api/types";

// const baseURL = process.env.NEXT_PUBLIC_URL;
const baseURL = "";

const fetchCoreConfig = (
  method: METHOD,
  options: RequestInit = {}
): RequestInit => {
  return {
    method,
    // headers: userAuth ? { Authorization: userAuth } : { Authorization: '' },
    credentials: "include",
    ...options,
  };
};

export const getFetch = async <Res>(url: string, options: RequestInit = {}) => {
  const config = fetchCoreConfig(METHOD.GET, options);
  const response = await fetch(`${baseURL}${url}`, config);
  console.log("response", response);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Res>;
};

export const postFetch = async <Res>(
  url: string,
  options: RequestInit = {}
) => {
  const config = fetchCoreConfig(METHOD.POST, options);
  const response = await fetch(`${baseURL}${url}`, config);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Res>;
};

export const putFetch = async <Res>(url: string, options: RequestInit = {}) => {
  const config = fetchCoreConfig(METHOD.PUT, options);
  const response = await fetch(`${baseURL}${url}`, config);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Res>;
};

export const deleteFetch = async <Res>(
  url: string,
  options: RequestInit = {}
) => {
  const config = fetchCoreConfig(METHOD.DELETE, options);
  const response = await fetch(`${baseURL}${url}`, config);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Res>;
};

export const patchFetch = async <Res>(
  url: string,
  options: RequestInit = {}
) => {
  const config = fetchCoreConfig(METHOD.PATCH, options);
  const response = await fetch(`${baseURL}${url}`, config);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Res>;
};
