import React, { createContext, useContext, useState } from 'react'

import { GetManyDefaultResponse } from '../models/getManyDefaultResponse'
import { TimeProxy } from '../models/time/timeProxy'

/**
 * The type that join the types of the times response
 */
export type Times = TimeProxy[] | GetManyDefaultResponse<TimeProxy>

/**
 * The interface that has all the needed properties that will be used to
 * control the times list
 */
export interface TimeContextProps {
    times: Times
    setTimes: (value: Times) => void
}

/**
 * The context that allows the app components change the times list
 */
export const TimeContext = createContext<TimeContextProps>(
    {} as TimeContextProps
)

/**
 * The app's main time provider properties
 */
export interface TimeProviderProps {
    children: JSX.Element
}

/**
 * The app's main time provider component
 */
const TimeProvider: React.FC<TimeProviderProps> = ({
    children
}: TimeProviderProps): JSX.Element => {
    //#region Hooks

    const [times, setTimes] = useState<Times>([])

    //#endregion

    return (
        //#region JSX

        <TimeContext.Provider
            value={{
                times,
                setTimes
            }}
        >
            {children}
        </TimeContext.Provider>

        //#endregion
    )
}

TimeProvider.displayName = 'TimeProvider'

export default TimeProvider

/**
 * The hooks that allows calling the times list
 */
export function useTimes(): TimeContextProps {
    return useContext(TimeContext)
}
