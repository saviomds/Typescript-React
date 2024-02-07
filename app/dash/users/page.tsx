import React from "react";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {street: string};
}
const usersPage = async() => {

  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] =  await result.json();
  return (
   <div className="overflow-x-auto">
     <table className="table border-emerald-950 table-xs "  >
      <thead>
        <tr>
          <th>No:</th>
          <th>Name</th>
          <th>Username</th>
          <th>UserEmail</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => 
        <tr className="bg-base-200">
            <td>{user.id}</td>
            <td key={user.id}> {user.name}</td>
            <td>{user.username}</td>
            <td>{user.email} <br /> {` street - ` + user.address.street}</td>
        </tr>
        )}
      </tbody>
     
    </table>
   </div>
  );
};

export default usersPage;
