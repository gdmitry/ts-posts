import { ReactElement } from "react"
import { PostType, UserType } from "../types"

interface PropsType {
  post: PostType,
  user?: UserType,
}

const Post = ({ post, user }: PropsType): ReactElement => {
  if (user?.id === 2)
    throw new Error();

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <p>Post ID: {post.id}</p>
      <p>Author: {user?.name} from {user?.name}</p>
      <p>Tagline: {user?.company?.catchPhrase}</p>
    </article>
  )
}
export default Post