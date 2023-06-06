const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
// const USERID_KEY = 'user-localid'

export const setItem = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
export const removeItem = (key) => {
    localStorage.removeItem(key)
}

export function setTokens({ refreshToken, accessToken, expiresIn = 3600 }) {
    const expiresDate = Date.now() + expiresIn * 1000
    localStorage.setItem(TOKEN_KEY, accessToken)
    localStorage.setItem(REFRESH_KEY, refreshToken)
    localStorage.setItem(EXPIRES_KEY, expiresDate)
}
export function removeAuthData() {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(REFRESH_KEY)
    localStorage.removeItem(EXPIRES_KEY)
}
export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY)
}
export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY)
}
export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY)
}
