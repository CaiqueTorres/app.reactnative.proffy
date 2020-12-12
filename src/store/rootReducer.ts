import { userReducer } from './user/reducers'
import { combineReducers } from 'redux'

/**
 * The app's main reducer
 */
export const rootReducer = combineReducers({
    userState: userReducer
})

export type RootState = ReturnType<typeof rootReducer>
