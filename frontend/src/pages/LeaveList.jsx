import React, { useEffect, useState } from "react";
import { getLeaves, deleteLeave } from "../services/LeaveService";

function LeaveList() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const response = await getLeaves();
      setLeaves(response.data);
    } catch (error) {
      console.error("Error fetching leaves", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteLeave(id);
      fetchLeaves();
    } catch (error) {
      console.error("Error deleting leave", error);
    }
  };

  return (
    <div className="card">
      <h2>Leave Requests</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Dates</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.employeeName}</td>
              <td>{leave.leaveType}</td>
              <td>{leave.startDate} → {leave.endDate}</td>
              <td>{leave.reason}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(leave.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default LeaveList;