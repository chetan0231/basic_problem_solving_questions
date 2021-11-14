import React, { useState } from "react";

export default function UserData(props) {
    const {data} = props

  return (
    <div>
      <ul>
        <li>Full Name : {data.fullName}</li>
        <li>Email ID : {data.email}</li>
        <li>Address : {data.address}</li>
        <li>Mobile : {data.mobile}</li>
      </ul>
    </div>
  );
}
