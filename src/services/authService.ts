import { LoginPayload } from '../models/auth/loginPayload'
import { TokenProxy } from '../models/auth/tokenProxy'

import api from '../api'

export class AuthService {
    /**
     * Function that can return the token
     * @param payload stores the user credentials
     */
    public async login(payload: LoginPayload): Promise<TokenProxy> {
        const response = await api.post<TokenProxy>('/auth/local', payload)
        return response.data
    }
}
