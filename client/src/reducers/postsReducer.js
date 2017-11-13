// import { ADD_POST, FETCH_POST_LIST } from "../actions/types";
//
// const INITIAL_STATE = { posts: [] };
//
// export default function(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case FETCH_POST_LIST:
//             return { ...state, posts: action.payload.data };
//         default:
//             return state;
//     }
// }


import { FETCH_POST_LIST } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_POST_LIST:
            return action.payload;
        default:
            return state;
    }
}