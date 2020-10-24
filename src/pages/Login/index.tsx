import React from 'react'
import { View } from 'react-native'

import {
    ContainerSafeAreaView,
    IconView,
    LoginView,
    LoginHeaderView,
    LoginHeaderTitleText,
    LoginHeaderCreateAccountText
} from './styles'

import Button from '../../components/atoms/Button'
import TextInput from '../../components/atoms/TextInput'

/**
 * The app login page
 *
 * This component stores all the login page style and logic
 */
const LoginPage: React.FC = () => {
    return (
        //#region JSX

        <ContainerSafeAreaView>
            <IconView>
                <LoginHeaderTitleText>Logo</LoginHeaderTitleText>
            </IconView>
            <LoginView>
                <LoginHeaderView>
                    <LoginHeaderTitleText>Fazer login</LoginHeaderTitleText>
                    <LoginHeaderCreateAccountText>
                        Criar uma conta
                    </LoginHeaderCreateAccountText>
                </LoginHeaderView>
                <View>
                    <TextInput
                        keyboardType="email-address"
                        placeholder="E-mail"
                        colorTheme="#8257e5"
                        style={{
                            borderBottomWidth: 0,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder="Senha"
                        colorTheme="#8257e5"
                        style={{
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10
                        }}
                    />
                </View>
                <Button
                    enabled={false}
                    text="Entrar"
                    style={{ height: 65 }}
                    enabledColor="#04D361"
                    textEnabledColor="#fff"
                />
            </LoginView>
        </ContainerSafeAreaView>

        //#endregino
    )
}

LoginPage.displayName = 'LoginPage'

export default LoginPage
