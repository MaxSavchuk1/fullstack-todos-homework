import axios from 'axios';
import queryString from 'query-string';

const axiosOptions = {
  baseURL: 'http://localhost:5000/api',
};

const apiInstance = axios.create(axiosOptions);

export const getTasks = pagination =>
  apiInstance.get(`/tasks/?${queryString.stringify(pagination)}`);

export const createTask = task => apiInstance.post('/tasks', task);

export const deleteTask = id => apiInstance.delete(`/tasks/${id}`);

export const updateTask = (id, isDone) =>
  apiInstance.patch(`/tasks/${id}`, { isDone });
