import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Replace this with your real key
const clerkPubKey = "pk_test_Zml0LXNoYWQtODIuY2xlcmsuYWNjb3VudHMuZGV2JA";

// Get the root DOM element
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element with ID 'root' not found in the DOM!");
}

// Create a React root and render the app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);