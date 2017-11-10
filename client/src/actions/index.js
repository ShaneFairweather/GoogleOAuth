import axios from 'axios';
import { FETCH_USER, FETCH_USER_LIST } from './types';

export const fetchUser = () =>
    async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    };

export const fetchUserList = () =>
    async dispatch => {
        const res = await axios.get('/users');
        dispatch({ type: FETCH_USER_LIST, payload: res.data });
    };


// export function getUsers() {
//     const request = axios.get(`http://localhost/users`);
//     return {
//         type: GET_USERS,
//         payload: request
//     }
// }
