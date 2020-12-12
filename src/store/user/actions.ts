import { UserProxy } from '../../api/models/user/userProxy'
import { UserActions, UserActionTypes } from './types'

export function setMe(me: UserProxy): UserActions {
    return {
        type: UserActionTypes.SET_ME,
        payload: me
    }
}
