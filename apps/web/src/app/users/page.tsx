// Example: Server Component fetching users
// Demonstrates Clean Architecture in frontend

import { UserList } from '../../features/users/components/UserList.js'

interface IUserPageData {
  readonly id: string
  readonly name: string
  readonly email: string
}

async function fetchUsers(): Promise<readonly IUserPageData[]> {
  // Replace with actual API call
  return [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
  ]
}

export default async function UsersPage(): Promise<JSX.Element> {
  const users = await fetchUsers()

  return (
    <main>
      <h1>Users</h1>
      <UserList users={users} />
    </main>
  )
}
