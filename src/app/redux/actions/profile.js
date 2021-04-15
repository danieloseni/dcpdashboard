import profileActionTypes from '../types/profile';
import { endpoints, getHeaders } from '../helpers/api';

export const fetchProfileStart = () => {
    return {
        type: profileActionTypes.FETCH_PROFILE_START,
    };
}

export const fetchProfileSuccess = (payload) => {
    return {
        type: profileActionTypes.FETCH_PROFILE_SUCCESS,
        payload,
    };
}

export const fetchProfileFailure = (payload) => {
    return {
        type: profileActionTypes.FETCH_PROFILE_FAILURE,
        payload
    }
}

export const updateCompanyDetailsStart = () => {
    return {
        type: profileActionTypes.UPDATE_COMPANY_DETAILS_START,
    };
}

export const updateCompanyDetailsSuccess = (payload) => {
    return {
        type: profileActionTypes.UPDATE_COMPANY_DETAILS_SUCCESS,
        payload,
    };
}

export const updateCompanyDetailsFailure = (payload) => {
    return {
        type: profileActionTypes.UPDATE_COMPANY_DETAILS_FAILURE,
        payload
    }
}

export const updateManagerDetailsStart = () => {
    return {
        type: profileActionTypes.UPDATE_MANAGER_DETAILS_START,
    };
}

export const updateManagerDetailsSuccess = (payload) => {
    return {
        type: profileActionTypes.UPDATE_MANAGER_DETAILS_SUCCESS,
        payload,
    };
}

export const updateManagerDetailsFailure = (payload) => {
    return {
        type: profileActionTypes.UPDATE_MANAGER_DETAILS_FAILURE,
        payload
    }
}

export const updateFlatRateStart = () => {
    return {
        type: profileActionTypes.UPDATE_FLAT_RATE_START,
    };
}

export const updateFlatRateSuccess = (payload) => {
    return {
        type: profileActionTypes.UPDATE_FLAT_RATE_SUCCESS,
        payload,
    };
}

export const updateFlatRateFailure = (payload) => {
    return {
        type: profileActionTypes.UPDATE_FLAT_RATE_FAILURE,
        payload
    }
}

export const createFlatRateStart = () => {
    return {
        type: profileActionTypes.CREATE_FLAT_RATE_START,
    };
}

export const createFlatRateSuccess = (payload) => {
    return {
        type: profileActionTypes.CREATE_FLAT_RATE_SUCCESS,
        payload,
    };
}

export const createFlatRateFailure = (payload) => {
    return {
        type: profileActionTypes.CREATE_FLAT_RATE_FAILURE,
        payload
    }
}

export const fetchFlatRatesStart = () => {
    return {
        type: profileActionTypes.FETCH_FLAT_RATES_START,
    };
}

const fetchFlatRatesSuccess = (payload) => {
    return {
        type: profileActionTypes.FETCH_FLAT_RATES_SUCCESS,
        payload,
    };
}

export const fetchFlatRatesFailure = (payload) => {
    return {
        type: profileActionTypes.FETCH_FLAT_RATES_FAILURE,
        payload
    }
}

export const deleteFlatRateStart = () => {
    return {
        type: profileActionTypes.DELETE_FLAT_RATE_START,
    };
}

const deleteFlatRateSuccess = (payload) => {
    return {
        type: profileActionTypes.DELETE_FLAT_RATE_SUCCESS,
        payload,
    };
}

export const deleteFlatRateFailure = (payload) => {
    return {
        type: profileActionTypes.DELETE_FLAT_RATE_FAILURE,
        payload
    }
}


export const fetchFlatRates = () => dispatch => {
    dispatch(fetchFlatRatesStart())
    fetch(endpoints.API_HOME + '/provider/flat-rates', {
        headers: getHeaders(true),
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                dispatch(fetchFlatRatesFailure("Oops. An error occured."));
            }
        })
        .then(data => {
            dispatch(fetchFlatRatesSuccess(data.flatRates));
        }).catch(err => {
            console.error(err.message);
            dispatch(fetchFlatRatesFailure("Network error."));
        });
}

export const createFlatRate = (rate) => dispatch => {
    dispatch(createFlatRateStart())
    fetch(endpoints.API_HOME + '/provider/flat-rates', {
        method: "POST",
        headers: getHeaders(true),
        body: JSON.stringify(rate)
    })
        .then(res => {
            if (res.status === 200) {
                return res.json()
                    .then(data => {
                        dispatch(createFlatRateSuccess({
                            ...rate,
                            id: data.id
                        }));
                    })
            } else {
                dispatch(createFlatRateFailure("An error occured."));
            }
        })
        .catch(err => {
            console.error(err.message);
        });
}

export const deleteFlatRate = (id) => dispatch => {
    dispatch(deleteFlatRateStart())
    fetch(endpoints.API_HOME + `/provider/flat-rates/${id}`, {
        method: "DELETE",
        headers: getHeaders(true),
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                dispatch(deleteFlatRateFailure("Oops. An error occured."));
            }
        })
        .then(data => {
            dispatch(deleteFlatRateSuccess(id));
        }).catch(err => {
            console.error(err.message);
        });
}

export const updateFlatRate = (rate) => dispatch => {
    dispatch(updateFlatRateStart())
    fetch(endpoints.API_HOME + `/provider/flat-rates`, {
        method: "PUT",
        headers: getHeaders(true),
        body: JSON.stringify(rate)
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                dispatch(updateFlatRateFailure("Oops. An error occured."));
            }
        })
        .then(data => {
            dispatch(updateFlatRateSuccess(rate));
        }).catch(err => {
            console.error(err.message);
        });
}

export const fetchProfile = () => dispatch => {
    dispatch(fetchProfileStart())
    fetch(endpoints.API_HOME + '/provider/me', {
        headers: getHeaders(true),
    })
        .then(res => {
            if (res.status === 200) {
                return res.json().then(data => {
                    dispatch(fetchProfileSuccess(data));
                });
            } else {
                dispatch(fetchProfileFailure("Oops. An error occured."));
            }
        })
        .catch(err => {
            console.log(err.message);
            dispatch(fetchProfileFailure("Network error."));
        });
}

export const updateCompanyDetails = (data) => dispatch => {
    dispatch(updateCompanyDetailsStart());
    fetch(endpoints.API_HOME + `/provider/me`, {
        method: "PATCH",
        headers: getHeaders(true),
        body: JSON.stringify(data)
    })
        .then(async res => {
            if (res.status === 200) {
                await res.json();
                dispatch(updateCompanyDetailsSuccess(data));
            } else {
                dispatch(updateCompanyDetailsFailure("Oops. An error occured."));
            }
        })
        .catch(err => {
            console.error(err.message);
        });
}

export const updateManagerDetails = (data) => dispatch => {
    dispatch(updateManagerDetailsStart());
    fetch(endpoints.API_HOME + `/provider/manager`, {
        method: "PATCH",
        headers: getHeaders(true),
        body: JSON.stringify(data)
    })
        .then(async res => {
            if (res.status === 200) {
                await res.json();
                dispatch(updateManagerDetailsSuccess(data));
            } else {
                dispatch(updateManagerDetailsFailure("Oops. An error occured."));
            }
        })
        .catch(err => {
            console.error(err.message);
        });
}