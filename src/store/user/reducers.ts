import { UserState, UserActions, UserActionTypes, SetMeAction } from './types'

/**
 * The user initial state
 */
const initialState: UserState = {
    me: null
}

/**
 * The reducer that will controll the data in the user state
 * @param state the new user state
 * @param action the action that is being called
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
