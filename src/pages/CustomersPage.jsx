import React from "react";
import "./CustomersPage.css"; // Import the CSS file for styling

const CustomersPage = () => {
  return (
    <div className="customers-page">
      <h2 className="page-title">Customers</h2>
      <div className="topbar">
        <input
          type="text"
          placeholder="Search customers..."
          className="search-bar"
        />
        <button className="btn-add-customer">Add New Customer</button>
      </div>

      <table className="customers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Customer 1</td>
            <td>customer1@example.com</td>
            <td>Active</td>
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

export default CustomersPage;
