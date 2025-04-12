import React from "react";
import { useParams } from "react-router-dom";

const userList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function UserDetail() {
  const { id } = useParams();
  const user = userList.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h2>Details of {user.name}</h2>
    </div>
  );
}

export default UserDetail;
