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

import Button from '../../components/atoms/Button'
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
                style={{ width: '100%' }}
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
                        title="Nome"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <UserDataTextInput
                        title="Sobrenome"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <UserDataTextInput
                        title="E-mail"
                        keyboardType="email-address"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <UserDataTextInput
                        title="Whatsapp"
                        keyboardType="phone-pad"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <UserDataTextInput
                        multiline
                        title="Whatsapp"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <UserDataTitle>Sobre a aula</UserDataTitle>
                    <UserDataTextInput
                        title="Matéria"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <UserDataTextInput
                        title="Custo da sua hora por aula"
                        keyboardType="decimal-pad"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <Button
                        enabled
                        enabledColor="#04D361"
                        text="Salvar alterações"
                        style={{ marginTop: 10, height: 65 }}
                    />
                </UserDataView>
            </ContainerScrollView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

AccountPage.displayName = 'AccountPage'

export default AccountPage
