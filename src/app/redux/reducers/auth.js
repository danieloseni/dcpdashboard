import authActionTypes from '../types/auth';

const initialState = {
    loggedIn: false,
    user: {},
    error: null  
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN_STARTED: {
            return {
                ...state,
                loggingIn: true,
            }
        }
        case authActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                user: action.payload,
                error: null
            }
        }
        case authActionTypes.LOGIN_FAILED: {
            return {
                ...state,
                loggedIn: false,
                error: action.payload,
                loggingIn: false,
            }
        }
        case authActionTypes.SIGNUP_STARTED: {
            return {
                ...state,
                signingUp: true,
            }
        }
        case authActionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                signingUp: false,
                error: null
            }
        }
        case authActionTypes.SIGNUP_FAILED: {
            return {
                ...state,
                error: action.payload,
                signingUp: false,
            }
        }
        case authActionTypes.CHANGE_PASSWORD_STARTED: {
            return {
                ...state,
                updating: true,
                error: null,
            }
        }
        case authActionTypes.CHANGE_PASSWORD_SUCCESS: {
            return {
                ...state,
                updating: false,
                error: null,
            }
        }
        case authActionTypes.CHANGE_PASSWORD_FAILED: {
            return {
                ...state,
                updating: false,
                error: action.payload,
            }
        }
        case authActionTypes.CLEAR_ERROR_MESSAGE: {
            return {
                ...state,                
                error: null,
            }
        }
        case "LOG_OUT": {
            return initialState
        }
        default: {
            return state;
        }
    }
}

export default authReducer;