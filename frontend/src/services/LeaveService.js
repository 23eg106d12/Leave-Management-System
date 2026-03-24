import axios from "axios";

// Using Vite's environment variable system
const API_URL = import.meta.env.VITE_API_URL || "https://leave-management-system-bk.onrender.com/api/leaves";
class LeaveService {
  getAllLeaves() {
    return axios.get(API_URL);
  }

  createLeave(leave) {
    return axios.post(API_URL, leave);
  }

  updateLeaveStatus(id, status) {
    return axios.put(`${API_URL}/${id}?status=${status}`);
  }

  deleteLeave(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new LeaveService();