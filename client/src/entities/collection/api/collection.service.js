import {
    httpService,
    httpServiceWithAuth,
} from '../../../shared/api/http.service'

const API_URL = '/api/collection/'
const createCollection = async (data) => {
    return await httpServiceWithAuth.post(API_URL + 'create', data)
}

const collectionService = {
    createCollection,
}
export { collectionService }
