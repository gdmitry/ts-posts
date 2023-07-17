export type PostType = {
  readonly id: number,
  userId: number,
  title: string,
  text: string,
};

export type CompanyType = {
  name: string,
  catchPhrase: string,
  bs: string,
};

export type UserType = {
  readonly id: number,
  name: string,
  email: string,
  username: string,
  company: CompanyType,
};

export type PostsResponseType = {
  posts: PostType[],
  users: UserType[],
};
