// src/components/Rating.js
import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

function Rating({ ngoId }) {
  const [rating, setRating] = useState(0);

  const submitRating = async () => {
    const ngoRef = doc(db, "ngos", ngoId);
    await updateDoc(ngoRef, { rating: rating });
  };

  return (
    <div>
      <label>Rate this NGO:</label>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      <button onClick={submitRating}>Submit</button>
    </div>
  );
}

export default Rating;
