import errorActionTypes from '../types/error.types';

// Action creators
export const setError = (payload) => {
    return {
        type: errorActionTypes.SET_ERROR,
        payload
    };
}

const clearError = () => {
    return {
        type: errorActionTypes.CLEAR_ERROR,
    };
}