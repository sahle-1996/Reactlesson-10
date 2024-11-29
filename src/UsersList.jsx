import React, { useState } from "react";
import "./UsersList.css";

const UsersList = () => {
  // State to store users' data
  const [users, setUsers] = useState([
    { id: 1, name: "Abel Tadese", age: 25 },
    { id: 2, name: "Solomon Gebre", age: 30 },
    { id: 3, name: "Siem Sium", age: 22 },
  ]);

  // State to handle editing
  const [editUser, setEditUser] = useState(null);
  const [newData, setNewData] = useState({ name: "", age: "" });

  // Handle edit button click
  const handleEditClick = (user) => {
    setEditUser(user.id);
    setNewData({ name: user.name, age: user.age });
  };

  // Handle save button click
  const handleSaveClick = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editUser
          ? { ...user, name: newData.name, age: parseInt(newData.age, 10) }
          : user
      )
    );
    setEditUser(null); // Exit edit mode
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="users-list-container">
      <h1 className="title">User Management</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {editUser === user.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={newData.name}
                  onChange={handleChange}
                  className="edit-input"
                />
                <input
                  type="number"
                  name="age"
                  value={newData.age}
                  onChange={handleChange}
                  className="edit-input"
                />
                <button onClick={handleSaveClick} className="save-btn">
                  Save
                </button>
              </div>
            ) : (
              <>
                <span className="user-info">
                  <strong>Name:</strong> {user.name} | <strong>Age:</strong>{" "}
                  {user.age}
                </span>
                <button
                  onClick={() => handleEditClick(user)}
                  className="edit-btn"
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
