import { SubjectProxy } from '../../models/subject/subjectProxy'
import { SubjectActions, SubjectActionTypes } from './types'

export function setSubjects(subjects: SubjectProxy[]): SubjectActions {
    return {
        type: SubjectActionTypes.SET_SUBJECTS,
        payload: subjects
    }
}
