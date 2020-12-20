import { SubjectProxy } from '../../models/subject/subjectProxy'

/**
 * The subject reducer state
 */
export interface SubjectState {
    subjects: SubjectProxy[] | null
}

/**
 * The subject action types
 *
 * It is used to call some functionalities in the project related with the
 * subjects
 */
export enum SubjectActionTypes {
    SET_SUBJECTS = '@subject/SET_SUBJECTS'
}

/**
 * The action that will be called to set all the registered subjects
 */
export interface SetSubjectsAction {
    type: typeof SubjectActionTypes.SET_SUBJECTS
    payload: SubjectProxy[]
}

export type SubjectActions = SetSubjectsAction
