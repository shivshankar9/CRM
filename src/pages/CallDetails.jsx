import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CallDetails = () => {
  const { id } = useParams(); // /calls/:id
  const [callData, setCallData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API response delay
    setTimeout(() => {
      const dummyData = {
        contactName: "Jane Doe",
        phoneNumber: "+1 555-1234",
        botName: "SalesBot-AI",
        status: "completed",
        duration: 180,
        timestamp: "2025-05-01T14:30:00Z",
        transcription: "Hello, this is SalesBot calling to follow up on your inquiry.",
        recordingUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      };

      setCallData(dummyData);
      setLoading(false);
    }, 1000); // simulate 1-second API delay
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!callData) return <div>No call data found.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Call Details</h2>
      <p><strong>Call ID:</strong> {id}</p>
      <p><strong>Contact:</strong> {callData.contactName}</p>
      <p><strong>Phone:</strong> {callData.phoneNumber}</p>
      <p><strong>Bot:</strong> {callData.botName}</p>
      <p><strong>Status:</strong> {callData.status}</p>
      <p><strong>Duration:</strong> {callData.duration}s</p>
      <p><strong>Timestamp:</strong> {new Date(callData.timestamp).toLocaleString()}</p>

      {callData.transcription && (
        <>
          <h3>Transcription</h3>
          <p>{callData.transcription}</p>
        </>
      )}

      {callData.recordingUrl && (
        <>
          <h3>Audio Recording</h3>
          <audio controls src={callData.recordingUrl} />
        </>
      )}
    </div>
  );
};

export default CallDetails;
