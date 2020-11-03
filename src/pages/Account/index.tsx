import React from 'react'
import { Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AppStackParamsList } from '../../routes/AppStack'

import {
    ContainerSafeAreaView,
    ContainerScrollView,
    DetailsView,
    DetailsImageBackground,
    DetailsTitleText,
    DetailsSubtitleText,
    UserDataView,
    UserDataTitle,
    UserDataTextInput
} from './styles'

import Header from '../../components/atoms/Header'

import backgroundImage from '../../assets/images/login/login-page-background.png'
import photoImage from '../../assets/images/profile.jpg'

const AccountPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'AccountPage'>
    >()

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <Header
                title="Meu perfil"
                onPress={() => {
                    navigation.pop()
                }}
                style={{
                    width: '100%'
                }}
            />
            <ContainerScrollView>
                <DetailsView>
                    <DetailsImageBackground source={backgroundImage}>
                        <Image
                            source={photoImage}
                            style={{
                                width: 175,
                                height: 175,
                                borderRadius: 100
                            }}
                        />
                        <DetailsTitleText>Caique Torres</DetailsTitleText>
                        <DetailsSubtitleText>Física</DetailsSubtitleText>
                    </DetailsImageBackground>
                </DetailsView>
                <UserDataView>
                    <UserDataTitle>Seus dados</UserDataTitle>
                    <UserDataTextInput
                        viewStyle={{
                            marginVertical: 20
                        }}
                        title="Nome"
                    />
                    <UserDataTextInput
                        viewStyle={{
                            marginVertical: 20
                        }}
                        title="Sobrenome"
                    />
                    <UserDataTextInput
                        viewStyle={{
                            marginVertical: 20
                        }}
                        title="E-mail"
                    />
                </UserDataView>
            </ContainerScrollView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

AccountPage.displayName = 'AccountPage'

export default AccountPage
