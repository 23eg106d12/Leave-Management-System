import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createLeave = (leave) => {
  return axios.post(API_URL, leave);
};

export const getLeaves = () => {
  return axios.get(API_URL);
};

export const deleteLeave = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};