import Cookies from "js-cookie";

export function getAllCookies() {
    return Cookies.getJSON();
}
export function setCookie(key, value, expireTime) {
    return Cookies.set(key, value, {
        expires: expireTime,
    });
}
export function getCookie(key) {
    return Cookies.get(key);
}
export function removeCookie(key) {
    return Cookies.remove(key);
}