import React, { useEffect, useState } from "react";
import LeaveService from "../services/LeaveService";

function LeaveList() {
  const [leaves, setLeaves] = useState([]);

  // Fetch all leaves
  const fetchLeaves = () => {
    LeaveService.getAllLeaves()
      .then((res) => {
        setLeaves(res.data);
      })
      .catch((error) => {
        console.error("Error fetching leaves:", error);
      });
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  // Update status (Approve / Reject)
  const handleStatus = (id, status) => {
    LeaveService.updateLeaveStatus(id, status)
      .then(() => {
        fetchLeaves();
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  // Delete leave
  const handleDelete = (id) => {
    LeaveService.deleteLeave(id)
      .then(() => {
        fetchLeaves();
      })
      .catch((error) => {
        console.error("Error deleting leave:", error);
      });
  };

  return (
    <div className="card">
      <h2>Recent Requests</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {leaves.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)" }}>
                  No leave requests found.
                </td>
              </tr>
            ) : (
              leaves.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.id}</td>
                  <td>{leave.employeeName}</td>
                  <td>{leave.leaveType}</td>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{leave.reason}</td>
                  <td>
                    <span className={`status-badge status-${leave.status}`}>
                      {leave.status}
                    </span>
                  </td>
                  <td>
                    {leave.status === "PENDING" && (
                      <>
                        <button className="btn-action btn-approve" onClick={() => handleStatus(leave.id, "APPROVED")}>
                          Approve
                        </button>
                        <button className="btn-action btn-reject" onClick={() => handleStatus(leave.id, "REJECTED")}>
                          Reject
                        </button>
                      </>
                    )}
                    <button className="btn-action btn-delete" onClick={() => handleDelete(leave.id)} aria-label="Delete">
                      X
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveList;