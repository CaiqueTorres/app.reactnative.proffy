import { CreateTimePayload } from '../models/time/createTimePayload'
import { TimeProxy } from '../models/time/timeProxy'

import api from '../api'

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