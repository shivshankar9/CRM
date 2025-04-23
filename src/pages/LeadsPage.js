import React from "react";
import "./LeadsPage.css"; // Import the CSS file for styling

const LeadsPage = () => {
  return (
    <div className="leads-page">
      <h2 className="page-title">Leads</h2>
      <div className="topbar">
        <input
          type="text"
          placeholder="Search leads..."
          className="search-bar"
        />
        <button className="btn-add-lead">Add New Lead</button>
      </div>

      <table className="leads-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render list of leads */}
          <tr>
            <td>Lead 1</td>
            <td>Contacted</td>
            <td>John Doe</td>
            <td>
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
          {/* Additional rows can be added here */}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsPage;
