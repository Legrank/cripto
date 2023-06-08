import {
    httpService,
    httpServiceWithAuth,
} from '../../../shared/api/http.service'

const API_URL = '/api/user/'
const getTopUserToatalsale = async (auth) => {
    const http = auth ? httpServiceWithAuth : httpService
    return await http.get(API_URL + 'totalsale')
}

const userService = {
    getTopUserToatalsale,
}
export { userService }
