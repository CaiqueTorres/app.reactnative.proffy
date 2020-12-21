import { UserProxy } from '../../models/user/userProxy'

/**
 * The user reducer state
 */
export interface UserState {
    me: UserProxy | null
}

/**
 * The user action types
 *
 * It is used to call some functionalities in the project related with the user
 */
export enum UserActionTypes {
    SET_ME = '@user/SET_ME'
}

/**
 * The action that will be called to set the logged user
 */
export interface SetMeAction {
    type: typeof UserActionTypes.SET_ME
    payload: UserProxy
}

export type UserActions = SetMeAction
