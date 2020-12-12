import { useSelector } from 'react-redux'

import { RootState } from '../store/rootReducer'

import { UserProxy } from '../api/models/user/userProxy'

export default function useUser(): UserProxy | null {
    return useSelector((state: RootState) => state.userReducer.user)
}
