import Nav from './Nav'

interface PropsType {
  currentUserId: number,
  setCurrentUserId: (userId: number) => void,
}

function Header({ currentUserId, setCurrentUserId }: PropsType) {
  return (
    <header>
      <h1>My Blogs</h1>
      <Nav currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} />
    </header>
  )
}

export default Header