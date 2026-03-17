import axios from "axios";

const API_URL = "https://leave-management-system-73fx.onrender.com/api/leaves";

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