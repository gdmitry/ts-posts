import { PostType } from "../types";
import { api, delay } from "./utils";

export const postsApiUrl = "/posts";

export const getPostsByUserId = async (url: string, userId: number) => {
  await delay(1000);
  const posts: PostType[] = await api(`${url}?userId=${userId}`);
  return posts;
};
