import axios from "axios";

const API_URL = "https://leave-management-system-bk.onrender.com/api/leaves";

export const getLeaves = () => axios.get(API_URL);

export const createLeave = (leave) => axios.post(API_URL, leave);

export const updateLeave = (id, status) =>
  axios.put(`${API_URL}/${id}?status=${status}`);

export const deleteLeave = (id) =>
  axios.delete(`${API_URL}/${id}`);