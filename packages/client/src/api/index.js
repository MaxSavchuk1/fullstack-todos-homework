import axios from 'axios';

const axiosOptions = {
  baseURL: 'http://localhost:5000/api',
};

const apiInstance = axios.create(axiosOptions);

export const getTasks = () => apiInstance.get('/tasks');

export const createTask = task => apiInstance.post('/tasks', task);

export const deleteTask = id => apiInstance.delete(`/tasks/${id}`);

export const updateTask = (id, isDone) => {
  return apiInstance.patch(`/tasks/${id}`, { isDone });
};
