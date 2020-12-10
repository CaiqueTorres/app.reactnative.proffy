import React from 'react'
import Emoji from 'react-native-emoji'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import {
    ContainerSafeAreaView,
    ChildrenView,
    HeaderView,
    TitleText,
    ProffysAmountView,
    ProffysAmountText
} from './styles'

import Header from '../../components/atoms/Header'

import { AppStackParamsList } from '../../navigations/appStack'
import Filter from './Filter'

const ProffysPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'GiveClassesPage'>
    >()

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
