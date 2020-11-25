import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import {
    ContainerView,
    HeaderView,
    TitleText,
    NewText,
    ContentView
} from './styles'

/**
 * The app's main available times list properties
 */
export interface AvailableTimesListProps {
    onClickedNewButton?(): void
    children?: JSX.Element[] | JSX.Element
}

/**
 * The app's main available times list
 * It is used in the Account page and in the GiveClass page
 */
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
