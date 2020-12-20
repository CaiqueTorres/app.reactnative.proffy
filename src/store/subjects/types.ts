import { SubjectProxy } from '../../models/subject/subjectProxy'

export interface SubjectState {
    subjects: SubjectProxy[] | null
}

export enum SubjectActionTypes {
    SET_SUBJECTS = '@subject/SET_SUBJECTS'
}

export interface SetSubjectsAction {
    type: typeof SubjectActionTypes.SET_SUBJECTS
    payload: SubjectProxy[]
}

export type SubjectActions = SetSubjectsAction
