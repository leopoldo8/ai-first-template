interface IUserListProps {
  readonly users: readonly {
    readonly id: string
    readonly name: string
    readonly email: string
  }[]
}

export function UserList({ users }: IUserListProps): JSX.Element {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} — {user.email}
        </li>
      ))}
    </ul>
  )
}
