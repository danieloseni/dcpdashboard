import preferencesTypes from '../types/preferences.types';

// Action creators
export const changeTheme = () => {
    return {
        type: preferencesTypes.CHANGE_THEME,
    };
}