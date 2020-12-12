import { userReducer } from './user/reducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    userState: userReducer
})

export type RootState = ReturnType<typeof rootReducer>
