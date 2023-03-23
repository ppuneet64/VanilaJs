import axios from "axios";
import { decryptData } from 'utility/helper'
let notificationTimer = null;
const Http = axios.create({
  baseURL: 'https://api.example.com'
});
var errorList = [];

/**
 * Here Modify request data if needed like Login token
 */
Http.interceptors.request.use(request => {
    const appStore = decryptData(localStorage.getItem("appState"))
    const language = localStorage.getItem("i18nextLng");
    if (appStore && appStore.user && appStore.user !== null) {
        let { auth_token = "" } = appStore.user;
        if (request.data instanceof FormData) {
            request.data.append("language_id", language);
        } else {
            request.data = new FormData();
            request.data.append("language_id", language);
        }
        request.headers["Authorization"] = `Bearer ${auth_token}`;
    } else {
        clearTimeout(notificationTimer);
        notificationTimer = setTimeout(() => {
            toast.warn("Login Expired redirecting to login page.");
            window.location = "/login"
        }, 100);
    }
    return request;
});

/**
 * Intercept Responses and check if response status os OK.
 */
Http.interceptors.response.use(response => {
    /**
     * Added temperory solution to check expired data.
     */
    errorList = [];
    return response;
}, error => {
    clearTimeout(notificationTimer);
    if (!error.response) {
        notificationTimer = setTimeout(() => {
            console.log(error)
        }, 300);
    }

    if (error.response && error.response.status) {
        const { data = {}, status = 500 } = error.response
        switch (status) {
            case 401:
				toast.info(data.message || "Login expired");
				window.location = "/login";
                break;
            case 500:
                toast.warn(data.message || "Something is not right here.");
                break;
            default:
                break
        }
    }
    return Promise.reject(error);
});

export default Http;
