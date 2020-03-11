import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default postReducer=(state = initialState, action) => {
    switch (action.type) {
        // case 'INCREMENT':
        //     return state + action.payload;
        // case 'DECREMENT':
        //     return state - 1;
        default:
            return state;
    }
}