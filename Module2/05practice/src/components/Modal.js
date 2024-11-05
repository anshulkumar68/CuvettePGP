// src/Modal.js
import React, { useState } from "react";
import "./index.css";

const Modal = ({ isOpen, onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleCreate = () => {
    console.log(`Group Name: ${groupName}, Color: ${selectedColor}`);
    onClose(); // Close the modal after creation
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Group</h2>
        <label htmlFor="groupName">Group Name</label>
        <input
          type="text"
          id="groupName"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />

        <label>Choose Color</label>
        <div className="color-options">
          {["#8e44ad", "#e74c3c", "#f39c12", "#3498db"].map((color) => (
            <span
              key={color}
              className={`color-circle ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        <button onClick={handleCreate} className="create-btn">
          Create
        </button>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
