import preferencesTypes from '../types/preferences.types';

const initialState = {
    darkTheme: false
};

const preferencesReducer = (state = initialState, action) => {
    switch (action.type) {
        case preferencesTypes.CHANGE_THEME: {
            return {
                ...state,
                darkTheme: !state.darkTheme 
            }
        }
        default: {
            return state;
        }
    }
}

export default preferencesReducer;