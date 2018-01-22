import { FETCH_BLOG_LIST } from "../actions/types";

export default function (state = null, action) {
    switch(action.type) {
        case FETCH_BLOG_LIST:
            return action.payload;
        default:
            return state;
    }
}