const baseUrl = 'http://localhost:3000';

export const delay = (time: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const api = (apiUrl: string) => fetcher(`${baseUrl}${apiUrl}`);