import { userReducer } from './user/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    userReducer
})

export type RootState = ReturnType<typeof rootReducer>
