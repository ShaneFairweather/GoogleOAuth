import axios from 'axios';
import {ADD_POST, FETCH_USER, FETCH_USER_LIST, FETCH_POST_LIST} from './types';

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


// export function getUsers() {
//     const request = axios.get(`http://localhost/users`);
//     return {
//         type: GET_USERS,
//         payload: request
//     }
// }

export const addPost = (author, avatar, content) => {
    const request = axios.post('/api/add-post', {author, avatar, content});
    return {
        type: ADD_POST,
        payload: request
    }
}


export const fetchPostList = () =>
    async dispatch => {
        const res = await axios.get('/api/posts');
        dispatch({ type: FETCH_POST_LIST, payload: res.data });
    };