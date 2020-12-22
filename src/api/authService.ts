import api from '.'

import { LoginPayload } from '../models/auth/loginPayload'
import { TokenProxy } from '../models/auth/tokenProxy'

/**
 * Method that can return the token
 * @param payload stores the user credentials
 */
export async function login(payload: LoginPayload): Promise<TokenProxy> {
    const response = await api.post<TokenProxy>('/auth/local', payload)
    return response.data
}
