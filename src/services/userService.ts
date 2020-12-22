import { CreateUserPayload } from '../models/user/createUserPayload'
import { UpdateUserPayload } from '../models/user/updateUserPayload'
import { UserProxy } from '../models/user/userProxy'

import api from '../api'

/**
 * Function that can create a new user
 * @param createUserPayload stores the basic user data
 */
export async function createUser(
    createUserPayload: CreateUserPayload
): Promise<UserProxy> {
    const response = await api.post<UserProxy>('/users', createUserPayload)
    return response.data
}

/**
 * Function that can return the logged user data
 * @param token stores the logged user token
 */
export async function getMe(token: string): Promise<UserProxy> {
    const getMeResponse = await api.get<UserProxy>('/users/me', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    return getMeResponse.data
}

/**
 * Function that can change some user data
 * @param id stores the user id
 * @param payload stores the user new data
 * @param token stores the logged user token
 */
export async function updateUser(
    id: number,
    payload: UpdateUserPayload | undefined,
    token: string
): Promise<void> {
    await api.patch(`/users/${id}`, payload, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
