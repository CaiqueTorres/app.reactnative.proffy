import { UserState, UserActions, UserActionTypes, SetMeAction } from './types'

const initialState: UserState = {
    me: null
}

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
