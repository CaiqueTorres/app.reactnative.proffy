import React from 'react'

import { ContainerView } from './styles'

import { WeekDay } from '../../../../api/time'

export interface TimeProps {
    weekDay?: WeekDay
    from?: Date | string
    to?: Date | string
}

const Time: React.FC<TimeProps> = ({
    weekDay,
    from,
    to
}: TimeProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerView></ContainerView>

        //#endregion
    )
}

Time.displayName = 'Time'

export default Time
