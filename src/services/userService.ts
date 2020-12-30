import { CreateUserPayload } from '../models/user/createUserPayload'
import { UpdateUserPayload } from '../models/user/updateUserPayload'
import { UserProxy } from '../models/user/userProxy'

import api from '../api'

export class UserService {
    /**
     * Method that can create a new user
     * @param createUserPayload stores the basic user data
     */
    public async createUser(
        createUserPayload: CreateUserPayload
    ): Promise<UserProxy> {
        const response = await api.post<UserProxy>('/users', createUserPayload)
        return response.data
    }

    /**
     * Method that can return the logged user data
     * @param token stores the logged user token
     */
    public async getMe(token: string): Promise<UserProxy> {
        const getMeResponse = await api.get<UserProxy>('/users/me', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        return getMeResponse.data
    }

    /**
     * Method that can change some user data
     * @param userId stores the user id
     * @param payload stores the user new data
     * @param token stores the logged user token
     */
    public async updateUser(
        userId: number,
        payload: UpdateUserPayload | undefined,
        token: string
    ): Promise<void> {
        await api.patch(`/users/${userId}`, payload, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
}
