import { UserState, UserActions, UserActionTypes, SetMeAction } from './types'

const initialState: UserState = {
    user: null
}

export function userReducer(
    state = initialState,
    action: UserActions
): UserState {
    switch (action.type) {
        case UserActionTypes.SET_ME:
            return {
                ...initialState,
                user: (action as SetMeAction).payload
            }
        default:
            return state
    }
}
