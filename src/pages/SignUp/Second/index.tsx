import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StatusBar } from 'expo-status-bar'

import { AppStackParamsList } from '../../../routes/AppStack'

import {
    ContainerSafeAreaView,
    TitleView,
    TitleText,
    SubtitleText,
    FooterView,
    FooterTitle,
    TextsInputView
} from '../styles'

import Button from '../../../components/atoms/Button'
import TextInput from '../../../components/atoms/TextInput'

import {
    validateEmail,
    validatePassword
} from '../../../utils/validationFunctions'
import SignUpHeader from '../Header'

/**
 * The second sign up page
 *
 * This page is responsible to get the user e-mail and password
 */
const SecondSignUpPage: React.FC = (): JSX.Element => {
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
                        <TextInput
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
                        <TextInput
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
                        onPress={() => {
                            navigation.push('SuccessPage', {
                                title: 'Cadastro concluído!',
                                subtitle:
                                    'Agora você faz parte da plataforma da Proffy',
                                buttonTitle: 'Fazer login'
                            })
                        }}
                    />
                </FooterView>
            </ContainerSafeAreaView>
        </KeyboardAvoidingView>

        //#endregion
    )
}

SecondSignUpPage.displayName = 'SecondSignUpPage'

export default SecondSignUpPage
