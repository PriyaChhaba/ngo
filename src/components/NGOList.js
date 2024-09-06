// src/components/NGOList.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../index.css"; // Import global styles

function NGOList() {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    const fetchNGOs = async () => {
      const ngoCollection = collection(db, "ngos");
      const ngoSnapshot = await getDocs(ngoCollection);
      const ngoList = ngoSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNgos(ngoList);
    };

    fetchNGOs();
  }, []);

  return (
    <div className="container">
      <h2>List of NGOs</h2>
      {ngos.length === 0 ? (
        <p>No NGOs found</p>
      ) : (
        ngos.map((ngo) => (
          <div key={ngo.id} className="ngo-card">
            <h3>{ngo.name}</h3>
            <p>{ngo.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default NGOList;
