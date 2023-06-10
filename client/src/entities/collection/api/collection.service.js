import {
    httpService,
    httpServiceWithAuth,
} from '../../../shared/api/http.service'

const API_URL = '/api/collection/'
const createCollection = async (data) => {
    return await httpServiceWithAuth.post(API_URL + 'create', data)
}
const getMyCollection = async () => {
    return await httpServiceWithAuth.get(API_URL + 'mycollection')
}
const getCollection = async (limit) => {
    const data = await httpService.get(API_URL + 'collection', {
        params: {
            limit,
        },
    })
    return data
}
const getCollectionById = async (id) => {
    const data = await httpService.get(API_URL + id)
    return data
}

const collectionService = {
    createCollection,
    getMyCollection,
    getCollection,
    getCollectionById,
}
export { collectionService }
