import { UserState, UserActions, UserActionTypes, SetMeAction } from './types'

/**
 * The user initial state
 */
const initialState: UserState = {
    me: null
}

/**
 * The reducer that will control the data in the user state
 * @param state stores the new user state
 * @param action stores the action that is being called
 */
export function userReducer(
    state = initialState,
    action: UserActions
): UserState {
    switch (action.type) {
        case UserActionTypes.SET_ME:
            return {
                ...initialState,
                me: (action as SetMeAction).payload
            }
        default:
            return state
    }
}
