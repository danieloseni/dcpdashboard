export const REDIRECT = "REDIRECT";
export const CLEAR_REDIRECT = "CLEAR_REDIRECT";

export const redirect = link => {
    console.log("=== REDIRECT ACTION DISPATCHED ===");
    return {
        type: REDIRECT,
        payload: link
    };
};

export const clearRedirect = () => {
    return {
        type: CLEAR_REDIRECT
    };
}