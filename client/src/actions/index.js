import axios from 'axios';
import {ADD_POST, FETCH_USER, FETCH_USER_LIST, FETCH_POST_LIST, ADD_BLOG, FETCH_BLOG_LIST} from './types';

export const fetchUser = () =>
    async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    };

export const fetchUserList = () =>
    async dispatch => {
        const res = await axios.get('/api/users');
        dispatch({ type: FETCH_USER_LIST, payload: res.data });
    };

export const addPost = (author, avatar, content) =>
    async dispatch => {
        const req = axios.post('/api/posts/new', {author, avatar, content});
        dispatch({type: ADD_POST, payload: req.data})
    };


export const fetchPostList = () =>
    async dispatch => {
        const res = await axios.get('/api/posts');
        dispatch({ type: FETCH_POST_LIST, payload: res.data });
    };


export const addBlog = (id, title, content) =>
    async dispatch => {
        const req = axios.post(`/api/${id}/blog-posts/new`, {id, title, content});
        dispatch({ type: ADD_BLOG, payload: req.data })
    };


export const fetchBlogList = (id) =>
    async dispatch => {
        const res = await axios.get(`/api/${id}/blog-posts`);
        dispatch({ type: FETCH_BLOG_LIST, payload: res.data });
    };