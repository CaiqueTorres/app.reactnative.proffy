import React from 'react'
import { KeyboardAvoidingView, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import {
    ContainerSafeAreaView,
    IconView,
    IconBackgroundImage,
    LogoImage,
    LogoSubtitleText,
    LoginView,
    LoginHeaderView,
    LoginHeaderTitleText,
    LoginHeaderCreateAccountText,
    PasswordStoreView,
    PasswordStoreText
} from './styles'

import Button from '../../components/atoms/Button'
import Checkbox from '../../components/atoms/Checkbox'
import TextInput from '../../components/atoms/TextInput'

import loginPageBackgroundImage from '../../assets/images/login/login-page-background.png'
import logoImage from '../../assets/images/logo.png'

/**
 * The app login page
 *
 * This component stores all the login page style and logic
 */
const LoginPage: React.FC = () => {
    return (
        //#region JSX
        <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <ContainerSafeAreaView>
                <IconView>
                    <IconBackgroundImage source={loginPageBackgroundImage} />
                    <View>
                        <LogoImage source={logoImage} />
                        <LogoSubtitleText>
                            Sua plaforma de estudos online.
                        </LogoSubtitleText>
                    </View>
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
                    <PasswordStoreView>
                        <Checkbox
                            boxActiveColor="#04D361"
                            boxSize={25}
                            activeIcon={
                                <FontAwesome
                                    name="check"
                                    size={16}
                                    color="#fff"
                                />
                            }
                            onPress={(value: boolean) => {}}
                        >
                            <PasswordStoreText>Lembrar-me</PasswordStoreText>
                        </Checkbox>
                        <PasswordStoreText>
                            Esqueci minha senha
                        </PasswordStoreText>
                    </PasswordStoreView>
                    <Button
                        enabled={false}
                        text="Entrar"
                        style={{ height: 65 }}
                        enabledColor="#04D361"
                        textEnabledColor="#fff"
                    />
                </LoginView>
            </ContainerSafeAreaView>
        </KeyboardAvoidingView>

        //#endregino
    )
}

LoginPage.displayName = 'LoginPage'

export default LoginPage
