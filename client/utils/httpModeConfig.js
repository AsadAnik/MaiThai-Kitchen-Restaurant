
const API_URL = process.env.API_URL;

export const config = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": `${API_URL}`,
    },
    // withCredentials: true,
    mode: 'cors',
};