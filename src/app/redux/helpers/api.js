export const endpoints = {
    // API_HOME: "https://deliveryconnectproject-78386.uc.r.appspot.com",
    API_HOME: "http://192.168.0.107:3002",
    // API_HOME: "http://192.168.0.155:3002",
    // API_HOME: "http://192.168.43.207:3002",
}

export function getHeaders(auth = false) {
    const token = localStorage.getItem("token");
    return {
        'Authorization': auth ? `Bearer ${token}` : "",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
}