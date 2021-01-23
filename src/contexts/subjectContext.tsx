import React, { createContext, useContext, useState } from 'react'

import { SubjectProxy } from '../models/subject/subjectProxy'

/**
 * The type of subject
 */
export type Subject = SubjectProxy

/**
 * The interface that has all the needed properties that will be used to
 * control the subjects list
 */
export interface SubjectContextProps {
    subjects: Subject[]
    setSubjects: (value: Subject[]) => void
}

/**
 * The context that allows the app components change the subjects list
 */
export const SubjectContext = createContext<SubjectContextProps>(
    {} as SubjectContextProps
)

/**
 * The app's main subject provider properties
 */
export interface SubjectProviderProps {
    children: JSX.Element
}

/**
 * The app's main subject provider component
 */
const SubjectProvider: React.FC<SubjectProviderProps> = ({
    children
}: SubjectProviderProps): JSX.Element => {
    //#region Hooks

    const [subjects, setSubjects] = useState<Subject[]>([
        {
            id: 0,
            name: 'Selecione'
        }
    ])

    //#endregion

    return (
        //#region JSX

        <SubjectContext.Provider
            value={{
                subjects,
                setSubjects
            }}
        >
            {children}
        </SubjectContext.Provider>

        //#endregion
    )
}

SubjectProvider.displayName = 'SubjectProvider'

export default SubjectProvider

/**
 * The hook that allows calling the subjects list
 */
export function useSubjects(): SubjectContextProps {
    return useContext(SubjectContext)
}
