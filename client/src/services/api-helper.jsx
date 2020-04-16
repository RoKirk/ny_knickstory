import axios from 'axios';

import apiUrl from './api-url'
export const api = axios.create({
    baseURL: apiUrl
})

// const baseUrl = 'http://localhost:3000'

// const api = axios.create({
//     baseURL: baseUrl
// })

export const loginUser = async (loginData) => {
    console.log(loginData)
    const resp = await api.post('/auth/login', loginData)
    console.log(resp)
    localStorage.setItem('authToken', resp.data.token);
    localStorage.setItem('id', resp.data.user.id);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
}

export const registerUser = async (registerData) => {
    const resp = await api.post('/users/', { user: registerData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
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

export const createPost = async (data) => {
    const resp = await api.post('/blog_posts', { blog_post: data })
    return resp.data
}

export const updatePost = async (data, post_id) => {
    const resp = await api.put(`/blog_posts/${post_id}`, { blog_post: data })
    return resp.data
}

export const destroyPost = async (postId) => {
    const resp = await api.delete(`/blog_posts/${postId}`)
    console.log("Destroyed")

    return resp.data
}


