import React, { useState } from "react";
import LeaveService from "../services/LeaveService";

function AddLeave() {
  const [leave, setLeave] = useState({
    employeeName: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setLeave({
      ...leave,
      [e.target.name]: e.target.value,
    });
  };

  const saveLeave = (e) => {
    e.preventDefault();

    LeaveService.createLeave(leave).then(() => {
      setLeave({
        employeeName: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });
      window.location.reload(); // Simple reload to show new data in list
    }).catch(err => {
        console.error("Error adding leave", err);
        alert("Failed to request leave.");
    });
  };

  return (
    <div className="card">
      <h2>Request Leave</h2>

      <form onSubmit={saveLeave}>
        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            name="employeeName"
            placeholder="John Doe"
            value={leave.employeeName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Leave Type</label>
          <input
            type="text"
            name="leaveType"
            placeholder="e.g., Sick, Vacation"
            value={leave.leaveType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={leave.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={leave.endDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Reason</label>
          <textarea
            name="reason"
            placeholder="Brief description of the reason"
            value={leave.reason}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <button type="submit" className="btn-primary">Submit Request</button>
      </form>
    </div>
  );
}

export default AddLeave;