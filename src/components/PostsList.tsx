import useSWR from 'swr';
import Post from './Post';
import { getPostsByUserId, postsApiUrl } from '../api/postsApi';
import { getUsersById, usersApiUrl } from '../api/usersApi';

interface PropsType {
  currentUserId: number,
}

function PostsList({ currentUserId }: PropsType) {
  const { data: posts = [] } = useSWR<Awaited<ReturnType<typeof getPostsByUserId>>, object | undefined, [string, number]>(
    [postsApiUrl, currentUserId],
    ([url, userId]) => getPostsByUserId(url, userId),
    { suspense: true }
  )

  const { data: user } = useSWR<Awaited<ReturnType<typeof getUsersById>>, object | undefined, [string, number]>(
    [usersApiUrl, currentUserId],
    ([url, userId]) => getUsersById(url, userId),
    { suspense: true }
  )
  
  return (
    <main>
      {posts.map(post => <Post key={post.id} post={post} user={user} />)}
    </main>
  )
}

export default PostsList