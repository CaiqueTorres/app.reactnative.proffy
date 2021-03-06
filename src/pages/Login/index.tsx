import React, { Dispatch, useContext, useEffect, useState } from 'react'
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

import * as AuthService from '../../services/authService'
import * as TimesService from '../../services/timeService'
import * as UserService from '../../services/userService'

import { setMe } from '../../store/user/actions'
import { UserActions } from '../../store/user/types'

import { LoadingScreenContext } from '../../contexts/loadingScreenContext'
import { useTimes } from '../../contexts/timeContext'

import { AppStackParamsList } from '../../navigations/appStack'

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

import { validateEmail, validatePassword } from '../../utils/validation'

import logoImage from '../../assets/icons/logo.png'
import loginPageBackgroundImage from '../../assets/login/login-page-background.png'

/**
 * The app login page
 *
 * This component stores all the login page style and logic
 */
const LoginPage: React.FC = () => {
    //#region Hooks

    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'LoginPage'>
    >()

    const dispatch = useDispatch<Dispatch<UserActions>>()

    const { setTimes } = useTimes()
    const { setEnabledLoading } = useContext(LoadingScreenContext)

    const [validated, setValidated] = useState(true)
    const [inputValid, setInputValid] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        onInit()
    }, [])

    useEffect(() => {
        setInputValid(validateEmail(email) && validatePassword(password))
    }, [email, password])

    //#endregion

    //#region Functions

    /**
     * Function that is called when the component is mounted
     */
    async function onInit(): Promise<void> {
        try {
            const token = await SecureStore.getItemAsync('token')
            if (token) {
                setEnabledLoading(true)
                await logIn(token)
            }
        } catch (exception) {
            setValidated(false)
            console.log(exception)
            setEnabledLoading(false)
        }
    }

    /**
     * Function that can check the user email and password
     */
    async function signIn(): Promise<void> {
        setEnabledLoading(true)
        try {
            const { token } = await AuthService.login({ email, password })
            await SecureStore.setItemAsync('token', token)
            logIn(token)
        } catch (exception) {
            setValidated(false)
            console.log(exception)
            setEnabledLoading(false)
        }
    }

    /**
     * Function that can save the logged user data in the application state
     * @param token stores the user token
     */
    async function setMeInApplicationState(token: string) {
        const user = await UserService.getMe(token)
        const times = await TimesService.getTimes(user.id, token)

        setTimes(times)
        dispatch(setMe(user))
    }

    /**
     * Function that makes the user log in the app
     * @param token stores the user token
     */
    async function logIn(token: string): Promise<void> {
        await setMeInApplicationState(token)
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
