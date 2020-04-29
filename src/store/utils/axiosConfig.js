import axios from 'axios';
const baseUrl = process.env.REACT_APP_BACKEND_API;

export const axiosWithoutAuth = () => axios.create({
    baseURL: baseUrl
})

export const axiosWithAuth = token => axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
    }
});
