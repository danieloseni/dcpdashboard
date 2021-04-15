export const logout = () => {
    localStorage.removeItem("token");
}

export function isLoggedIn() {
    if (localStorage.getItem("token")) {
        return true;
    }

    return false;
}

export function formatMoney(amount, separator){
    if (amount){
        return `${separator} ` + (parseFloat(amount)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } 
    return "";
}