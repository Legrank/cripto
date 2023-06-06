import axios from 'axios'
import {
    getTokenExpiresDate,
    getRefreshToken,
    setTokens,
    getAccessToken,
} from '../lib/localstorage.service'

const baseURL = 'http://localhost:8080'
const httpService = axios.create({ baseURL })

// request
httpService.interceptors.request.use(
    async function (config) {
        const expiresDate = getTokenExpiresDate()
        const refreshToken = getRefreshToken()
        if (refreshToken && expiresDate < Date.now()) {
            const { data } = await refresh(refreshToken)
            setTokens(data)
        }

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)
const accessToken = getAccessToken()
const refresh = async (refreshToken) => {
    const response = await axios.post(baseURL + '/api/auth/token', {
        refreshToken,
    })
    return response
}
if (accessToken) {
    // eslint-disable-next-line dot-notation
    httpService.defaults.headers.common['Authorization'] =
        'Bearer ' + accessToken
}
// response
httpService.interceptors.response.use(
    (res) => {
        return res
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default httpService
