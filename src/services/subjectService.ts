import { GetManyDefaultResponse } from '../models/getManyDefaultResponse'
import { SubjectProxy } from '../models/subject/subjectProxy'

import api from '../api'

export class SubjectService {
    /**
     * Function that can get the subjects in the database with pagination
     * @param offset stores the initial value position
     * @param limit stores the page size
     * @param page stores the current page
     * @param token stores the logged user token
     */
    public async getSubjectsAsGetManyDefaultResponse(
        offset: number,
        limit: number,
        page: number,
        token: string
    ): Promise<GetManyDefaultResponse<SubjectProxy>> {
        const response = await api.get<GetManyDefaultResponse<SubjectProxy>>(
            `/subjects?offset=${offset}&limit=${limit}&page=${page}`,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        )
        return response.data
    }

    /**
     * Function that can get all the subjects saved in the database
     * @param token stores the logged user token
     */
    public async getAllSubjectsAsArray(token: string): Promise<SubjectProxy[]> {
        const response = await api.get<SubjectProxy[]>(`/subjects`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return response.data
    }
}
