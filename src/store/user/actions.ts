import { UserProxy } from '../../api/models/user/userProxy'
import { UserActions, UserActionTypes } from './types'

export function setUser(user: UserProxy): UserActions {
    return {
        type: UserActionTypes.SET_ME,
        payload: user
    }
}
