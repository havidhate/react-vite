import React from "react";
import { Link } from "react-router-dom";

const userList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function Users() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
