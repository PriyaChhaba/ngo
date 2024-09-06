// src/components/AddNGO.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "../index.css"; // Import global styles

function AddNGO() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const addNGO = async () => {
    if (name && description) {
      try {
        await addDoc(collection(db, "ngos"), {
          name,
          description,
          rating: 0,
          comments: []
        });
        setName("");
        setDescription("");
        setAlertMessage("NGO added successfully!");
      } catch (error) {
        console.error("Error adding NGO: ", error);
        setAlertMessage("Failed to add NGO.");
      }
    } else {
      setAlertMessage("Please provide both name and description.");
    }
  };

  return (
    <div className="container">
      <h2>Add a New NGO</h2>
      <input
        type="text"
        placeholder="NGO Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="NGO Description (Markdown supported)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addNGO}>Add NGO</button>
      {alertMessage && <div className="alert">{alertMessage}</div>}
    </div>
  );
}

export default AddNGO;
