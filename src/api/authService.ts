import api from '.'

import { LoginPayload } from '../models/auth/loginPayload'
import { TokenProxy } from '../models/auth/tokenProxy'

export class AuthService {
    /**
     * Method that can return the token
     * @param payload stores the user credentials
     */
    public static async login(payload: LoginPayload): Promise<TokenProxy> {
        const response = await api.post<TokenProxy>('/auth/local', payload)
        return response.data
    }
}
