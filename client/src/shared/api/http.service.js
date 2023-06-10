import axios from 'axios'
import {
    getTokenExpiresDate,
    getRefreshToken,
    setTokens,
    getAccessToken,
} from '../lib/localstorage.service'
import config from '../lib/config.json'

const baseURL = config.API_URL
const httpService = axios.create({ baseURL })
const httpServiceWithAuth = axios.create({ baseURL })

// request
httpService.interceptors.request.use(
    async function (config) {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)
httpServiceWithAuth.interceptors.request.use(
    async function (config) {
        const expiresDate = getTokenExpiresDate()
        const refreshToken = getRefreshToken()
        if (refreshToken && expiresDate < Date.now()) {
            const { data } = await refresh(refreshToken)
            // eslint-disable-next-line dot-notation

            config.headers.Authorization = 'Bearer ' + data.accessToken
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
    httpServiceWithAuth.defaults.headers.common['Authorization'] =
        'Bearer ' + accessToken
}
// response
httpServiceWithAuth.interceptors.response.use(
    (res) => {
        return res
    },
    function (error) {
        return Promise.reject(error)
    }
)
export { httpServiceWithAuth, httpService }
export default httpService
