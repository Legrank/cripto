import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authReducer } from '../../entities/auth'
import { userReducer } from '../../entities/user'
import { collectionReducer } from '../../entities/collection'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    collection: collectionReducer,
})

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    })
}
