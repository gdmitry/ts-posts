import { UserType } from "../types";
import { api, delay } from "./utils";

export const usersApiUrl = "/users";

export const getUsers = async (): Promise<UserType[]> => {
  await delay(1000);
  const users: UserType[] = await api(usersApiUrl);
  return users;
};

export const getUsersById = async (url: string, userId: number): Promise<UserType> => {
  await delay(1000);
  const user: UserType = await api(`${url}/${userId}`);
  return user;
};
