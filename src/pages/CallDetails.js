import React from "react";
import { useParams } from "react-router-dom";

const CallDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📞 Call Details</h2>
      <p>You're now viewing call info for ID: <strong>{id}</strong></p>
      {/* Add more call-specific details here */}
    </div>
  );
};

export default CallDetails;
