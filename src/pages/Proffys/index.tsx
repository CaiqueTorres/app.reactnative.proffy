import React from 'react'
import Emoji from 'react-native-emoji'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AppStackParamsList } from '../../navigations/appStack'

import {
    ContainerSafeAreaView,
    ChildrenView,
    HeaderView,
    TitleText,
    ProffysAmountView,
    ProffysAmountText
} from './styles'

import Header from '../../components/atoms/Header'

import Filter from './Filter'

/**
 * The main app's proffys page
 */
const ProffysPage: React.FC = (): JSX.Element => {
    //#region States

    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'GiveClassesPage'>
    >()

    //#endregion

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <Header
                pageTitle="Estudar"
                onPress={() => {
                    navigation.pop()
                }}
            />
            <ChildrenView>
                <HeaderView>
                    <TitleText>Proffys Disponíveis</TitleText>
                    <ProffysAmountView>
                        <Emoji name="nerd_face" style={{ fontSize: 20 }} />
                        <ProffysAmountText>{15} proffys</ProffysAmountText>
                    </ProffysAmountView>
                </HeaderView>
                <Filter />
            </ChildrenView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

ProffysPage.displayName = 'ProffysPage'

export default ProffysPage
