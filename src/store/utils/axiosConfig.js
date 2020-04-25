import axios from 'axios';
const baseUrl = 'https://lambda-mud-test.herokuapp.com';

export const axiosWithoutAuth = () => axios.create({
    baseURL: baseUrl
})

export const axiosWithAuth = key => axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Token ${key}`,
        'Content-Type': 'application/json'
    }
});
