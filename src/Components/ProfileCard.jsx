import React, { useState } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });

  const handleUserName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleUserAge = (e) => {
    setUser({ ...user, age: e.target.value });
  };

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <input type="text" onChange={handleUserName} placeholder="Enter A Name" />
      <input type="number" onChange={handleUserAge} placeholder="Enter A Age" />
    </div>
  );
};

export default ProfileCard;
