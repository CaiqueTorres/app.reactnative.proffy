import {
    SetSubjectsAction,
    SubjectActions,
    SubjectActionTypes,
    SubjectState
} from './types'

/**
 * The subject initial state
 */
const initialState: SubjectState = {
    subjects: null
}

/**
 * The reducer that will control the data in the subject state
 * @param state stores the new user state
 * @param action stores the action that is being called
 */
export function subjectReducer(
    state = initialState,
    action: SubjectActions
): SubjectState {
    switch (action.type) {
        case SubjectActionTypes.SET_SUBJECTS:
            return {
                ...initialState,
                subjects: (action as SetSubjectsAction).payload
            }
        default:
            return state
    }
}
