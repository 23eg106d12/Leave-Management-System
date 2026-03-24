import React, { useState } from "react";
import { createLeave } from "../services/LeaveService"; // ✅ FIXED import

function AddLeave({ onLeaveAdded }) {
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

  const saveLeave = async (e) => {
    e.preventDefault();

    try {
      await createLeave(leave); // ✅ FIXED usage

      setLeave({
        employeeName: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });

      if (onLeaveAdded) onLeaveAdded();

    } catch (err) {
      console.error("Error adding leave", err);
      alert("Failed to request leave.");
    }
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            value={leave.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Reason</label>
          <textarea
            name="reason"
            className="form-control"
            placeholder="Brief description of the reason"
            value={leave.reason}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default AddLeave;