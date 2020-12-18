import { UserProxy } from '../../models/user/userProxy'
import { UserActions, UserActionTypes } from './types'

/**
 * Function that can set the "me" property in the user state
 * @param me the logged user information
 */
export function setMe(me: UserProxy): UserActions {
    return {
        type: UserActionTypes.SET_ME,
        payload: me
    }
}
