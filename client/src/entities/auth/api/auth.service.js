import httpService from '../../../shared/api/http.service'

const API_URL = '/api/auth/'
const signUp = (data) => {
    return httpService.post(API_URL + 'singUp', data).then((response) => {
        return response
    })
}
const login = (username, password) => {
    return httpService
        .post(API_URL + 'singInWithPassword', {
            username,
            password,
        })
        .then((response) => {
            return response
        })
}
const authService = {
    signUp,
    login,
}
export { authService }
