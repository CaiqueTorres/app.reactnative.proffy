import React, { Dispatch, useEffect, useState } from 'react'
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import { useDispatch } from 'react-redux'

import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import * as SecureStore from 'expo-secure-store'
import { StatusBar } from 'expo-status-bar'

import { setMe } from '../../store/user/actions'
import { UserActions } from '../../store/user/types'

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

import AuthenticationTextInput from '../../components/atoms/AuthenticationTextInput'
import Button from '../../components/atoms/Button'
import Checkbox from '../../components/atoms/Checkbox'

import api from '../../api'
import loginPageBackgroundImage from '../../assets/images/login/login-page-background.png'
import logoImage from '../../assets/images/logo.png'
import { TokenProxy } from '../../models/auth/tokenProxy'
import { UserProxy } from '../../models/user/userProxy'
import { AppStackParamsList } from '../../navigations/appStack'
import { validateEmail, validatePassword } from '../../utils/validation'

/**
 * The app login page
 *
 * This component stores all the login page style and logic
 */
const LoginPage: React.FC = () => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'LoginPage'>
    >()

    const dispatch = useDispatch<Dispatch<UserActions>>()

    const [validated, setValidated] = useState(true)
    const [inputValid, setInputValid] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //#region Effects

    useEffect(() => {
        // initialize()
    }, [])

    useEffect(() => {
        setInputValid(validateEmail(email) && validatePassword(password))
    }, [email, password])

    //#endregion

    //#region Functions

    /**
     * Function that will be called when the component starts
     */
    // async function initialize(): Promise<void> {
    //     const token = await SecureStore.getItemAsync('token')
    //     if (token === null) return
    //     await setMeInApplicationState(token)
    //     navigateToLanding()
    // }

    /**
     * Function that can check the user email and password
     */
    async function signIn(): Promise<void> {
        try {
            const loginResponse = await api.post<TokenProxy>('/auth/local', {
                email,
                password
            })
            const token = loginResponse.data.token
            await SecureStore.setItemAsync('token', token)
            await setMeInApplicationState(token)
            navigateToLanding()
        } catch (exception) {
            setValidated(false)
            console.log(exception)
        }
    }

    /**
     * Function that can save the logged user data in the application state
     * @param token stores the user token
     */
    async function setMeInApplicationState(token: string) {
        const getMeResponse = await api.get<UserProxy>('/users/me', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        dispatch(setMe(getMeResponse.data))
    }

    /**
     * Function that can make the app navigate to the landing page
     */
    function navigateToLanding(): void {
        navigation.replace('LandingPage')
    }

    //#endregion

    return (
        //#region JSX

        <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <StatusBar translucent style="light" />
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
                        <TouchableWithoutFeedback
                            onPress={() => {
                                navigation.push('FirstSignUpPage')
                            }}
                        >
                            <LoginHeaderCreateAccountText>
                                Criar uma conta
                            </LoginHeaderCreateAccountText>
                        </TouchableWithoutFeedback>
                    </LoginHeaderView>
                    <View>
                        <AuthenticationTextInput
                            validated={validated}
                            keyboardType="email-address"
                            placeholder="E-mail"
                            colorTheme="#8257e5"
                            style={{
                                borderBottomWidth: 0,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }}
                            onChangeText={(text: string) => {
                                setEmail(text)
                                setValidated(true)
                            }}
                        />
                        <AuthenticationTextInput
                            validated={validated}
                            secureTextEntry
                            placeholder="Senha"
                            colorTheme="#8257e5"
                            style={{
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10
                            }}
                            onChangeText={(text: string) => {
                                setPassword(text)
                                setValidated(true)
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
                        >
                            <PasswordStoreText>Lembrar-me</PasswordStoreText>
                        </Checkbox>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                navigation.push('ForgotPasswordPage')
                            }}
                        >
                            <PasswordStoreText>
                                Esqueci minha senha
                            </PasswordStoreText>
                        </TouchableWithoutFeedback>
                    </PasswordStoreView>
                    <Button
                        enabled={inputValid}
                        text="Entrar"
                        style={{ height: 65 }}
                        enabledColor="#04D361"
                        textEnabledColor="#fff"
                        onPress={signIn}
                    />
                </LoginView>
            </ContainerSafeAreaView>
        </KeyboardAvoidingView>

        //#endregino
    )
}

LoginPage.displayName = 'LoginPage'

export default LoginPage
