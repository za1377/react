import {apiClient} from './ApiClient'

export const retrieveHelloWorld = () => apiClient.get("/hello-world");

export const retrieveHelloWorldBean = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWorldName = (username) => apiClient.get(`/hello-world/${username}`);

export const basicAuthCheck = (token) => apiClient.get("/basicauth", {
    headers: {
        Authorization: token
    }
});