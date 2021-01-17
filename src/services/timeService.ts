import { CreateTimePayload } from '../models/time/createTimePayload'
import { TimeProxy } from '../models/time/timeProxy'

import api from '../api'

/**
 * Function that can create a give-classes time for the user
 * @param userId stores the user id
 * @param createTimePayload stores the new time data
 */
export async function createTime(
    userId: number,
    createTimePayload: CreateTimePayload
): Promise<TimeProxy> {
    const response = await api.post<TimeProxy>(
        `/users/${userId}/times`,
        createTimePayload
    )
    return response.data
}
