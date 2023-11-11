import {apiClient} from './ApiClient'

export const retrieveAllUser = () => apiClient.get(`/users`);
export const deleteUserApi = (id) => apiClient.delete(`/users/${id}`);
export const retrieveUserApi = (id) => apiClient.get(`/users/${id}`);
export const updateUserApi = (id, user) => apiClient.put(`/users/${id}`, user);
export const createUserApi = (user) => apiClient.post(`/users`, user);