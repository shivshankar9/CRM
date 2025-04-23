import React from "react";
import "./TasksPage.css"; // Make sure to create this CSS file

const TasksPage = () => {
  return (
    <div className="tasks-page">
      <h2 className="page-title">Tasks</h2>
      <div className="topbar">
        <select className="task-filter">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button className="btn-add-task">Add New Task</button>
      </div>

      <table className="tasks-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Follow up with Lead 1</td>
            <td>
              <span className="status pending">Pending</span>
            </td>
            <td>John Doe</td>
            <td>
              <button className="btn-action edit">Edit</button>
              <button className="btn-action complete">Complete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TasksPage;
