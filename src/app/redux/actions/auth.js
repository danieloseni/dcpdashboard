import userActionTypes from '../types/auth';
import { endpoints, getHeaders } from '../helpers/api';
import { redirect } from './redirect.actions';
// import { setError } from './error.actions';


export const loginStarted = (payload) => {
    return {
        type: userActionTypes.LOGIN_STARTED,
    };
}

const loginSuccess = (payload) => {
    return {
        type: userActionTypes.LOGIN_SUCCESS,
        payload,
    };
}

export const loginFailed = (payload) => {
    return {
        type: userActionTypes.LOGIN_FAILED,
        payload
    }
}

export const signupStarted = (payload) => {
    return {
        type: userActionTypes.SIGNUP_STARTED,
    };
}

const signupSuccess = (payload) => {
    return {
        type: userActionTypes.SIGNUP_SUCCESS,
        payload,
    };
}

export const signupFailed = (payload) => {
    return {
        type: userActionTypes.SIGNUP_FAILED,
        payload
    }
}

export const logoutRequest = () => {
    return {
        type: userActionTypes.LOGOUT_REQUEST,
    }
};

const changePasswordFailed = (payload) => {
    return {
        type: userActionTypes.CHANGE_PASSWORD_FAILED,
        payload
    }
}

const changePasswordSuccess = () => {
    return {
        type: userActionTypes.CHANGE_PASSWORD_SUCCESS
    }
}

const changePasswordStarted = () => {
    return {
        type: userActionTypes.CHANGE_PASSWORD_STARTED
    }
}

export const clearAuthErrorMessage = () => {
    return {
        type: userActionTypes.CLEAR_ERROR_MESSAGE
    }
}

// Methods
export const loginRequest = (credentials) => dispatch => {
    dispatch(loginStarted());
    fetch(endpoints.API_HOME + '/user/login', {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(credentials)
    })
        .then(res => {
            if (res.status === 200) {
                return res.json().then(data => {
                    localStorage.setItem("token", data.token)
                    dispatch(loginSuccess(data));
                });
            } else if (res.status === 401) {
                dispatch(loginFailed("Invalid username/password"));
            }
        })
        .catch(err => {
            dispatch(loginFailed("Something weird happened"));
        });
}

export const registerUser = (credentials) => dispatch => {
    dispatch(signupStarted());
    fetch(endpoints.API_HOME + `/user/register`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
            ...credentials,
            role: "DELIVERY PROVIDER"
        })
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                dispatch(signupFailed("Couldn't sign you up now"));
            }
        })
        .then(data => {
            dispatch(signupSuccess())
            dispatch(loginRequest(credentials))
        }).catch(err => {
            dispatch(signupFailed("Oops. An error occured"));
        });
}

export const autoLogin = () => dispatch => {
    const token = localStorage.getItem('token');
    if (token != null) {
        alert(token);
        fetch(endpoints.API_HOME + '/providers/auto-login', {
            headers: getHeaders(true)
        }).then(res => res.json()).then(data => {
            if (data.status === 200) {
                localStorage.setItem('token', data.token);
                dispatch(loginSuccess(data.user));
            } else {
                dispatch(loginFailed());
            }
        }).catch(err => {
            dispatch(loginFailed());
        });;
    } else {
        alert("nada");
    }
}

export const changePassword = (data) => dispatch => {
    dispatch(changePasswordStarted());
    if (data.password1 === data.password2) {
        fetch(endpoints.API_HOME + '/providers/change-password', {
            method: "POST",
            headers: getHeaders(true),
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    dispatch(changePasswordSuccess());
                    dispatch(redirect("/settings"))
                } else if (data.status === 401) {
                    dispatch(changePasswordFailed("Invalid username/password"));
                } else {
                    dispatch(changePasswordFailed("An error occured."));
                }
            }).catch(err => {
                dispatch(changePasswordFailed("Network failure"));
            });
    } else {
        dispatch(changePasswordFailed("Passwords do not match"));
    }
}