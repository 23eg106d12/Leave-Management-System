import React, { useState } from "react";
import { createLeave } from "../services/LeaveService";

function AddLeave({ onLeaveAdded }) {

  const [leave, setLeave] = useState({
    employeeName: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLeave((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveLeave = async (e) => {
    e.preventDefault();

    console.log("Sending data:", leave); // ✅ Debug log

    try {
      const response = await createLeave(leave); // API call

      console.log("Response:", response); // ✅ Debug log

      // Reset form
      setLeave({
        employeeName: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });

      // Refresh list if parent passed function
      if (onLeaveAdded) {
        onLeaveAdded();
      }

      alert("Leave requested successfully ✅");

    } catch (err) {
      console.error("Error adding leave:", err);

      // Show better error
      if (err.response) {
        alert("Server error: " + err.response.data);
      } else if (err.request) {
        alert("No response from server (CORS / backend not running)");
      } else {
        alert("Error: " + err.message);
      }
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