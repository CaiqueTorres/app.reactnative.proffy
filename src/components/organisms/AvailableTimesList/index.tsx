import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import {
    ContainerView,
    HeaderView,
    TitleText,
    NewText,
    ContentView
} from './styles'

export interface AvailableTimesListProps {
    onClickedNewButton?(): void
    children?: JSX.Element[] | JSX.Element
}

const AvailableTimesList: React.FC<AvailableTimesListProps> = ({
    onClickedNewButton,
    children
}: AvailableTimesListProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerView>
            <HeaderView>
                <TitleText>Horários disponíveis</TitleText>
                <TouchableWithoutFeedback onPress={onClickedNewButton}>
                    <NewText>+ Novo</NewText>
                </TouchableWithoutFeedback>
            </HeaderView>
            <ContentView>{children}</ContentView>
        </ContainerView>

        //#endregion
    )
}

AvailableTimesList.displayName = 'AvailableTimesList'

export default AvailableTimesList
