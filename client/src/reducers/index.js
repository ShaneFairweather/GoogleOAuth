import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import blogReducer from "./blogReducer";

export default combineReducers({
   user: authReducer,
   users: usersReducer,
   posts: postsReducer,
   blogPosts: blogReducer
});