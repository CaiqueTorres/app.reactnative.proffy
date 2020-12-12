import { UserProxy } from '../../api/models/user/userProxy'

/**
 * The user reducer state
 */
export interface UserState {
    user: UserProxy | null
}

/**
 * The user action types
 * It is used to call some funcionalities in the project related with the user
 */
export enum UserActionTypes {
    SET_ME = '@user/SET_ME'
}

/**
 * The action that will be called to get the logged user
 */
export interface SetMeAction {
    type: typeof UserActionTypes.SET_ME
    payload: UserProxy
}

export type UserActions = SetMeAction
