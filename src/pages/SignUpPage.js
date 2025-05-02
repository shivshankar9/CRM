import React, { useEffect } from "react";
import { SignUp, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css"; // Optional CSS file for styles

const SignUpPage = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard"); // Redirect to dashboard if already signed in
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="signup-container">
      <div className="branding">
        <img src="/logo192.png" alt="CRM Pro Logo" className="logo" />
        <h1>
          CRM Pro: <span className="highlight">Sign Up</span>
        </h1>
        <p className="tagline">Join the all-in-one Sales Intelligence Platform</p>
      </div>

      <div className="auth-box">
        <h2>Create your account</h2>
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/login" // Link to the login page
          afterSignUpUrl="/dashboard" // Redirect to dashboard after successful sign up
          redirectUrl="/dashboard"
          appearance={{
            elements: {
              socialButtonsBlockButton: "custom-social-button",
            },
            layout: {
              socialButtonsPlacement: "top",
            },
          }}
        />

        <p className="demo-note">
          🚀 Try full CRM features with a free demo — no credit card needed.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
