// src/components/Comment.js
import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

function Comment({ ngoId }) {
  const [comment, setComment] = useState("");

  const submitComment = async () => {
    const ngoRef = doc(db, "ngos", ngoId);
    await updateDoc(ngoRef, { comments: arrayUnion(comment) });
    setComment(""); // Clear comment field after submitting
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment"
      />
      <button onClick={submitComment}>Submit</button>
    </div>
  );
}

export default Comment;
