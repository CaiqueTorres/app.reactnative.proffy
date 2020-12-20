import api from '.'

import { UpdateUserPayload } from '../models/user/updateUserPayload'
import { UserProxy } from '../models/user/userProxy'

export class UserService {
    /**
     * Method that can return the logged user data
     * @param token stores the logged user token
     */
    public static async getMe(token: string): Promise<UserProxy> {
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
    public static async updateUser(
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
}
