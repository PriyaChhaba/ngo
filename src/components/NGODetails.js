// src/components/NGODetails.js
import ReactMarkdown from "react-markdown";

function NGODetails({ ngo }) {
  return (
    <div>
      <h2>{ngo.name}</h2>
      <ReactMarkdown>{ngo.description}</ReactMarkdown>
    </div>
  );
}

export default NGODetails;
