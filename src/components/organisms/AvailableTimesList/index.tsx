import React from 'react'

import {
    ContainerView,
    HeaderView,
    TitleText,
    NewText,
    ContentView
} from './styles'

export interface AvailableTimesListProps {
    children?: JSX.Element[] | JSX.Element
}

const AvailableTimesList: React.FC<AvailableTimesListProps> = ({
    children
}: AvailableTimesListProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerView>
            <HeaderView>
                <TitleText>Horários disponíveis</TitleText>
                <NewText>+ Novo</NewText>
            </HeaderView>
            <ContentView>{children}</ContentView>
        </ContainerView>

        //#endregion
    )
}

AvailableTimesList.displayName = 'AvailableTimesList'

export default AvailableTimesList
