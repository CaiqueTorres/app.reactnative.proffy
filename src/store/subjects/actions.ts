import { SubjectProxy } from '../../models/subject/subjectProxy'
import { SubjectActions, SubjectActionTypes } from './types'

/**
 * Function that can set the "subjects" property in the subject state
 * @param subjects stores all the registered subjects
 */
export function setSubjects(subjects: SubjectProxy[]): SubjectActions {
    return {
        type: SubjectActionTypes.SET_SUBJECTS,
        payload: subjects
    }
}
