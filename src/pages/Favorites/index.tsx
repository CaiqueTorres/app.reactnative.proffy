import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ContainerSafeAreaView } from './styles'

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
                title="Estudar"
                onPress={() => {
                    navigation.pop()
                }}
            />
        </ContainerSafeAreaView>

        //#endregion
    )
}

FavoritesPage.displayName = 'FavoritesPage'

export default FavoritesPage
