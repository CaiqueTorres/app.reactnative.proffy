import { useSelector } from 'react-redux'

import { UserProxy } from '../models/user/userProxy'

import { RootState } from '../store/rootReducer'

/**
 * Hook that is used to get the logged user saved in the application state
 */
export default function useMe(): UserProxy | null {
    return useSelector((state: RootState) => state.userState.me)
}
