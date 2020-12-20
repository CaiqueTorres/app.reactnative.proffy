import {
    SetSubjectsAction,
    SubjectActions,
    SubjectActionTypes,
    SubjectState
} from './types'

const initialState: SubjectState = {
    subjects: null
}

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
