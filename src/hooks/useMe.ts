import { useSelector } from 'react-redux'

import { RootState } from '../store/rootReducer'

import { UserProxy } from '../services/models/user/userProxy'

/**
 * Hook that is used to get the logged user saved in the application state
 */
export default function useMe(): UserProxy | null {
    return useSelector((state: RootState) => state.userState.me)
}
