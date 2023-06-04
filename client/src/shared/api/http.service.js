import axios from 'axios'

const httpService = axios.create({ baseURL: 'http://localhost:8080' })

httpService.interceptors.response.use(
    (res) => {
        return res
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default httpService
