import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector(state => state.users)
  const userCount = useSelector(state=>state.users.length)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map(u=> {return (<div key={u.username} >{u.username}, Hometown: {u.hometown}</div>)})}
        {/* In addition, display the total number of users curently in the store */}
        <div></div>
        Total Users: {userCount}
      </ul>
    </div>
  );
}

export default Users;
