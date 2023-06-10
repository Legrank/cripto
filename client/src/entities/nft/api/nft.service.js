import {
    httpService,
    httpServiceWithAuth,
} from '../../../shared/api/http.service'

const API_URL = '/api/nft/'
const createNFT = async (data) => {
    return await httpServiceWithAuth.post(API_URL + 'create', data)
}
const getNftByIds = async (data) => {
    return await httpService.post(API_URL + 'nftbyids', data)
}
const updateNft = async (data) => {
    return await httpServiceWithAuth.post(API_URL + 'update', data)
}
const deleteNft = async (id) => {
    return await httpServiceWithAuth.delete(API_URL + id)
}

const nftService = {
    createNFT,
    getNftByIds,
    updateNft,
    deleteNft,
}
export { nftService }
