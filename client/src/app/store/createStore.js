import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authReducer } from '../../entities/auth'

const rootReducer = combineReducers({ authReducer })

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    })
}
