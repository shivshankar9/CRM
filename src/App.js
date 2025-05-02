import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import LeadsPage from "./pages/LeadsPage";
import ReportsPage from "./pages/ReportsPage";
import TasksPage from "./pages/TasksPage";
import CustomersPage from "./pages/CustomersPage";
import CallDetails from './pages/CallDetails';
import SignUpPage from "./pages/SignUpPage";
import CallLogsPage from "./pages/CallLogsPage";
import CampaignPage from "./pages/Campaigns"

// Wrapper to protect routes using Clerk
const ProtectedRoute = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

const RootRedirect = () => (
  <>
    <SignedIn>
      <Navigate to="/dashboard" replace />
    </SignedIn>
    <SignedOut>
      <Navigate to="/login" replace />
    </SignedOut>
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />


      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/leads"
        element={
          <ProtectedRoute>
            <LeadsPage />
          </ProtectedRoute>
        }
      />
      <Route path="/campaigns" element={<ProtectedRoute><CampaignPage /></ProtectedRoute>} />


      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <ReportsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TasksPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <CustomersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/callslogs"
        element={
          <ProtectedRoute>
            <CallLogsPage />
          </ProtectedRoute>
        }
      />


      <Route
        path="/calls/:id"
        element={
          <ProtectedRoute>
            <CallDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;