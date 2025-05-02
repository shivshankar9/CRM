  import React, { useState, useEffect } from "react";
  import { SignIn, useUser } from "@clerk/clerk-react";
  import { useNavigate } from "react-router-dom";
  import "./LoginPage.css";

  const testimonials = [
    "“This CRM transformed how we manage leads.” – Alex, Sales Manager",
    "“Beautiful design, seamless experience.” – Priya, CRM Admin",
    "“Our conversion rate grew by 40%!” – Rahul, Business Analyst",
  ];

  const LoginPage = () => {
    const { isSignedIn, signOut } = useUser();
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
      if (isSignedIn) navigate("/dashboard");
    }, [isSignedIn, navigate]);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    const toggleTheme = () => setDarkMode(!darkMode);

    const handleSignOut = async () => {
      await signOut();
      // Redirect to Clerk sign-in page with the desired redirect URL
      window.location.href = "https://fit-shad-82.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F";
    };

    return (
      <div className={`login-page ${darkMode ? "dark" : "light"}`}>
        <div className="login-left">
          <div className="branding">
            <img src="/logo192.png" alt="CRM Logo" className="logo" />
            <h1>Welcome to CRM Pro</h1>
            <p>{testimonials[currentTestimonial]}</p>
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
            {isSignedIn && (
              <button className="logout-btn" onClick={handleSignOut}>
                Logout
              </button>
            )}
          </div>
        </div>
        <div className="login-right">
          <div className="signin-box">
            <h2 className="signin-title">Login to your Dashboard</h2>
            <SignIn
              path="/login"
              routing="path"
              signUpUrl="/sign-up"
              afterSignInUrl="/dashboard"
              appearance={{
                elements: {
                  socialButtonsBlockButton: "custom-social-button",
                },
                layout: {
                  socialButtonsPlacement: "top",
                },
              }}
              redirectUrl="/dashboard"
            />
          </div>
        </div>
      </div>
    );
  };

  export default LoginPage;
