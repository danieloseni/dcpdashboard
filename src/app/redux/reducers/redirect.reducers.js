import { REDIRECT, CLEAR_REDIRECT } from '../actions/redirect.actions';

const initialState = {};

const redirectReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDIRECT:
            return {
                redirectTo: action.payload
            };
        case CLEAR_REDIRECT:
            return initialState;
        default:
            return state;
    }
};

export default redirectReducer;