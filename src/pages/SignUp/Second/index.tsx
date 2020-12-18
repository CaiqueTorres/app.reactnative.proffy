import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'

import { RouteProp } from '@react-navigation/native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StatusBar } from 'expo-status-bar'

import {
    ContainerSafeAreaView,
    TitleView,
    TitleText,
    SubtitleText,
    FooterView,
    FooterTitle,
    TextsInputView
} from '../styles'

import AuthenticationTextInput from '../../../components/atoms/AuthenticationTextInput'
import Button from '../../../components/atoms/Button'

import { AppStackParamsList } from '../../../navigations/appStack'
import api from '../../../services'
import { UserProxy } from '../../../services/models/user/userProxy'
import { validateEmail, validatePassword } from '../../../utils/validation'
import SignUpHeader from '../Header'

/**
 * The second sign up page
 *
 * This page is responsible to get the user e-mail and password
 */
const SecondSignUpPage: React.FC = (): JSX.Element => {
    const route = useRoute<RouteProp<AppStackParamsList, 'SecondSignUpPage'>>()
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'SecondSignUpPage'>
    >()

    const [valid, setValid] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //#region Effects

    useEffect(() => {
        setValid(validateEmail(email) && validatePassword(password))
    }, [email, password])

    //#endregion

    //#region Functions

    /**
     * Function that can send a request to save the user in the database
     */
    async function signUp(): Promise<void> {
        try {
            await api.post<UserProxy>('/users', {
                name: route.params.name,
                lastName: route.params.lastName,
                email,
                password
            })

            navigation.push('SuccessPage', {
                title: 'Cadastro concluído!',
                subtitle: 'Agora você faz parte da plataforma da Proffy',
                buttonTitle: 'Fazer login'
            })
        } catch (exception) {
            console.log(exception)
        }
    }

    //#endregion

    return (
        //#region JSX

        <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <StatusBar translucent style="dark" />
            <ContainerSafeAreaView>
                <SignUpHeader
                    dotsAmount={2}
                    selectedDot={1}
                    onPress={() => navigation.pop()}
                />
                <TitleView>
                    <TitleText>Crie sua conta gratuíta</TitleText>
                    <SubtitleText>
                        Basta preencher esses dados e você estará conosco.
                    </SubtitleText>
                </TitleView>
                <FooterView>
                    <FooterTitle>02. Email e Senha</FooterTitle>
                    <TextsInputView>
                        <AuthenticationTextInput
                            keyboardType="email-address"
                            placeholder="E-mail"
                            colorTheme="#8257e5"
                            style={{
                                borderBottomWidth: 0,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }}
                            onChangeText={setEmail}
                        />
                        <AuthenticationTextInput
                            secureTextEntry
                            placeholder="Senha"
                            colorTheme="#8257e5"
                            style={{
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10
                            }}
                            onChangeText={setPassword}
                        />
                    </TextsInputView>
                    <Button
                        enabledColor="#04D361"
                        text="Concluir cadastro"
                        enabled={valid}
                        style={{ height: 65 }}
                        onPress={signUp}
                    />
                </FooterView>
            </ContainerSafeAreaView>
        </KeyboardAvoidingView>

        //#endregion
    )
}

SecondSignUpPage.displayName = 'SecondSignUpPage'

export default SecondSignUpPage
