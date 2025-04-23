import React from "react";
import "./ReportsPage.css"; // Import the CSS file for styling

const ReportsPage = () => {
  return (
    <div className="reports-page">
      <h2 className="page-title">Reports</h2>
      <div className="topbar">
        <select className="report-filter">
          <option value="sales">Sales</option>
          <option value="leads">Leads</option>
          <option value="deals">Deals</option>
        </select>
        <button className="btn-generate-report">Generate Report</button>
      </div>

      <div className="report-content">
        <table className="report-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Sales</td>
              <td>$5000</td>
            </tr>
            <tr>
              <td>Total Leads</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Total Deals</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsPage;
