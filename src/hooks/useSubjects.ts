import { useSelector } from 'react-redux'

import { RootState } from '../store/rootReducer'

import { SubjectProxy } from '../models/subject/subjectProxy'

export default function useSubjects(): SubjectProxy[] | null {
    return useSelector((state: RootState) => state.subjectState.subjects)
}
