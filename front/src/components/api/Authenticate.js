import { apiClient } from "./ApiClient";

export const basicAuthCheck = (token) => apiClient.get("/basicauth", {
    headers: {
        Authorization: token
    }
});

export const jwtAuthCheck = (username, password) => apiClient.post("/authenticate", {username, password});