import { ADD_POST} from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case ADD_POST:
            return ;
        default:
            return state;
    }
}