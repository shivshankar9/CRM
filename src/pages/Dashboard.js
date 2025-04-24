import React, { useState } from "react";
import "./Dashboard.css";
import {
  FaUserFriends,
  FaChartBar,
  FaBell,
  FaPowerOff,
  FaUserPlus,
  FaFileAlt,
  FaCalendarCheck,
  FaPhoneAlt,
} from "react-icons/fa";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { signOut } = useClerk();
  const [modalType, setModalType] = useState(null);
  const [formData, setFormData] = useState({});
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setModalType(null);
    setFormData({});
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted [${modalType}]:`, formData);
    closeModal();
    alert(`${modalType.charAt(0).toUpperCase() + modalType.slice(1)} submitted!`);
  };

  const handleCall = () => {
    setModalType("call");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-title">CRM Panel</div>
        <div className="nav-links">
          <a className="nav-item" onClick={() => navigate("/leads")}>
            <FaUserFriends /> Leads
          </a>
          <a className="nav-item" onClick={() => navigate("/reports")}>
            <FaChartBar /> Reports
          </a>
          <a className="nav-item" onClick={() => navigate("/customers")}>
            <FaUserPlus /> Customers
          </a>
          <a className="nav-item" onClick={() => navigate("/tasks")}>
            <FaCalendarCheck /> Tasks
          </a>
        </div>
        <div className="logout-section">
          <a className="logout-link" onClick={handleLogout}>
            <FaPowerOff /> Logout
          </a>
        </div>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <h2 className="topbar-title">Dashboard</h2>
          <div className="topbar-right">
            <span className="greeting">Hi, Admin</span>
            <FaBell className="icon" size={20} />
            <div className="avatar-container" onClick={() => setShowProfileMenu(!showProfileMenu)}>
              <img className="avatar" src="https://i.pravatar.cc/36" alt="avatar" />
              {showProfileMenu && (
                <div className="profile-dropdown">
                  <a onClick={() => navigate("/profile")}>Profile</a>
                  <a onClick={handleLogout}>Log Out</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="actions-grid">
          <button className="action-button action-blue" onClick={() => setModalType("lead")}>
            <div className="action-content">
              <FaUserPlus /> New Lead
            </div>
          </button>
          <button className="action-button action-purple" onClick={() => setModalType("report")}>
            <div className="action-content">
              <FaFileAlt /> Generate Report
            </div>
          </button>
          <button className="action-button action-green" onClick={() => setModalType("task")}>
            <div className="action-content">
              <FaCalendarCheck /> Schedule Task
            </div>
          </button>
          <button className="action-button action-yellow" onClick={() => setModalType("customer")}>
            <div className="action-content">
              <FaUserFriends /> Add Customer
            </div>
          </button>
          <button className="action-button action-green" onClick={handleCall}>
            <div className="action-content">
              <FaPhoneAlt /> Start Call
            </div>
          </button>
        </div>

        {modalType && (
          <div className="modal-backdrop">
            <div className="modal">
              <h3>
                {modalType === "lead" && "New Lead"}
                {modalType === "report" && "Generate Report"}
                {modalType === "task" && "Schedule Task"}
                {modalType === "customer" && "Add Customer"}
                {modalType === "call" && "Start Call"}
              </h3>
              <form onSubmit={handleFormSubmit}>
                {modalType === "lead" && (
                  <>
                    <input name="name" placeholder="Lead Name" onChange={handleInputChange} required />
                    <input name="email" type="email" placeholder="Email" onChange={handleInputChange} required />
                    <input name="phone" placeholder="Phone" onChange={handleInputChange} />
                  </>
                )}
                {modalType === "customer" && (
                  <>
                    <input name="name" placeholder="Customer Name" onChange={handleInputChange} required />
                    <input name="email" type="email" placeholder="Email" onChange={handleInputChange} />
                    <input name="company" placeholder="Company" onChange={handleInputChange} />
                  </>
                )}
                {modalType === "task" && (
                  <>
                    <input name="title" placeholder="Task Title" onChange={handleInputChange} required />
                    <input name="dueDate" type="date" onChange={handleInputChange} required />
                    <textarea name="notes" placeholder="Notes" onChange={handleInputChange}></textarea>
                  </>
                )}
                {modalType === "report" && (
                  <>
                    <select name="type" onChange={handleInputChange} required>
                      <option value="">Select Report Type</option>
                      <option value="sales">Sales Report</option>
                      <option value="customer">Customer Report</option>
                      <option value="tasks">Task Report</option>
                    </select>
                  </>
                )}
                {modalType === "call" && (
                  <>
                    <input
                      name="callee"
                      placeholder="Enter Number or User ID"
                      onChange={handleInputChange}
                      required
                    />
                    <textarea
                      name="notes"
                      placeholder="Call Notes (optional)"
                      onChange={handleInputChange}
                    ></textarea>
                  </>
                )}
                <div className="form-actions">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={closeModal} className="close-button">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="overview-grid">
          <div className="overview-card border-blue">
            <div className="overview-label">New Leads</div>
            <div className="overview-value text-blue">64</div>
          </div>
          <div className="overview-card border-green">
            <div className="overview-label">Deals Closed</div>
            <div className="overview-value text-green">21</div>
          </div>
          <div className="overview-card border-yellow">
            <div className="overview-label">Pending Tasks</div>
            <div className="overview-value text-yellow">9</div>
          </div>
        </div>

        <div className="toast">🎉 Welcome back! You have 3 new leads.</div>
      </main>
    </div>
  );
};

export default Dashboard;
