import React from 'react'

import { WeekDay } from '../../../../models/time/timeProxy'

import { ContainerView } from './styles'

/**
 * The proffy time component properties
 */
export interface TimeProps {
    weekDay?: WeekDay
    from?: Date | string
    to?: Date | string
}

/**
 * The proffy time component
 *
 * It is used to display which day the proffy works
 */
const Time: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <ContainerView></ContainerView>

        //#endregion
    )
}

Time.displayName = 'Time'

export default Time
