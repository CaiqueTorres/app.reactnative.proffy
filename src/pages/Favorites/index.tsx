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

const FavoritesPage: React.FC = (): JSX.Element => {
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
                    <TitleText>Meus Proffys Favoritos</TitleText>
                    <ProffysAmountView>
                        <Emoji name="smile" style={{ fontSize: 20 }} />
                        <ProffysAmountText>{15} proffys</ProffysAmountText>
                    </ProffysAmountView>
                </HeaderView>
            </ChildrenView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

FavoritesPage.displayName = 'FavoritesPage'

export default FavoritesPage
