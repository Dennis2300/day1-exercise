import { BaseProps } from "../types";
import { users } from "../data/data";

type Props = BaseProps

export default function UserTable({ title }: Props) {
    return (
        <>
          <h2>{title}</h2>
          {/** Render all users in a table RIGHT HERE */}
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.isActive ? "Active" : "Inactive"}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
    
    
          {/**After that refactor the table-part into a separate Component and use like this */}
          {/*<UserTable users={users} />*/}
    
    
        </>
      );
}