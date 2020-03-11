import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
    baseURL: baseUrl
})

export const loginUser = async (loginData) => {
    console.log(loginData)
    const resp = await api.post('/auth/login', loginData)
    console.log(resp)
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
}

export const registerUser = async (registerData) => {
    const resp = await api.post('/users/', { user: registerData })
    return resp.data
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.get('/auth/verify');
        return resp.data
    }
    return false;
}


