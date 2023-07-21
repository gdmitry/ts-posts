import useSWR from 'swr'
import { usersApiUrl, getUsers } from '../api/usersApi'
import { ChangeEvent, ReactElement } from 'react';

interface PropsType {
  setCurrentUserId: (value: number) => void,
  currentUserId: number,
}

function Nav({ setCurrentUserId, currentUserId }: PropsType) {
  const {
    data: users = [],
    isLoading,
  } = useSWR<Awaited<ReturnType<typeof getUsers>>, object | undefined, string>(
    usersApiUrl,
    getUsers,
  );

  let options: ReactElement | ReactElement[] = <option>Loading...</option>;

  if (!isLoading) {
    options = users.map(user => (
      <option value={user.id} key={`opt${user.id}`}>{user.name}</option>
    ));

    const titleValue = <option key="opt0" value="0">Employees</option>
    options.push(titleValue)
  }

  const onChangeUser = (e: ChangeEvent<HTMLSelectElement>): void =>
    setCurrentUserId(Number(e.target.value));

  return (
    <select
      name="selectMenu"
      id="selectMenu"
      className="selectMenu"
      aria-label='User Name'
      onChange={onChangeUser}
      value={currentUserId}
    >
      {options}
    </select>
  )
}

export default Nav