import axios from "axios";

const API_URL = "http://localhost:8080/api/leaves";

export const getLeaves = () => axios.get(API_URL);

export const createLeave = (leave) => axios.post(API_URL, leave);

export const updateLeave = (id, leave) =>
  axios.put(`${API_URL}/${id}`, leave);

export const deleteLeave = (id) =>
  axios.delete(`${API_URL}/${id}`);