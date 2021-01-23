import { CreateTimePayload } from '../models/time/createTimePayload'
import { TimeProxy } from '../models/time/timeProxy'

import api from '../api'

/**
 * Function that can create a give-classes time for the user
 * @param userId stores the user id
 * @param createTimePayload stores the new time data
 */
export async function createTimes(
    userId: number,
    createTimePayload: CreateTimePayload | CreateTimePayload[],
    token: string
): Promise<TimeProxy | TimeProxy[]> {
    console.log(createTimePayload)

    const response = await api.post<TimeProxy | TimeProxy[]>(
        `/users/${userId}/times`,
        createTimePayload,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    )
    return response.data
}

/**
 * Function that can clear all the times entities from the database
 * @param userId stores the user id
 */
export async function clear(userId: number, token: string): Promise<void> {
    await api.delete(`/users/${userId}/times`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
