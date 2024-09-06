// src/components/Signup.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../index.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSignup = async () => {
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAlertMessage("Sign up successful!");
      } catch (error) {
        console.error("Error signing up: ", error.message);
        setAlertMessage("Failed to sign up. Please check your details.");
      }
    } else {
      setAlertMessage("Passwords do not match.");
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      {alertMessage && <div className="alert">{alertMessage}</div>}
    </div>
  );
}

export default Signup;
