import httpService from '../../../shared/api/http.service'

const API_URL = '/api/auth/'
const signUp = async (data) => {
    const response = await httpService.post(API_URL + 'singUp', data)
    return response
}
const login = async (data) => {
    const response = await httpService.post(
        API_URL + 'singInWithPassword',
        data
    )
    return response
}

const authService = {
    signUp,
    login,
}
export { authService }
