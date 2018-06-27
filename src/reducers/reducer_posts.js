import _ from 'lodash';
import {FETCH_POSTS, GET_POST} from "../actions/type";


export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case GET_POST:
            return {...state, [action.payload.data.id]: action.payload.data};
        default:
            return state;
    }
}