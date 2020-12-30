import { useSelector } from 'react-redux'

import { SubjectProxy } from '../models/subject/subjectProxy'

import { RootState } from '../store/rootReducer'

export default function useSubjects(): SubjectProxy[] | null {
    return useSelector((state: RootState) => state.subjectState.subjects)
}
