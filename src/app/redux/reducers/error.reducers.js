import errorActionTypes from '../types/error.types';

const initialState = {};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case errorActionTypes.SET_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case errorActionTypes.CLEAR_ERROR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export default errorReducer;