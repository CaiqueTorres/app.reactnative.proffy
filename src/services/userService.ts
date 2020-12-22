import api from '../api'
import { CreateUserPayload } from '../models/user/createUserPayload'
import { UpdateUserPayload } from '../models/user/updateUserPayload'
import { UserProxy } from '../models/user/userProxy'

export async function createUser(
    createUserPayload: CreateUserPayload
): Promise<UserProxy> {
    const response = await api.post<UserProxy>('/users', createUserPayload)
    return response.data
}

/**
 * Method that can return the logged user data
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
 * Method that can change some user data
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
