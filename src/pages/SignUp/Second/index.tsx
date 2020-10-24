import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StatusBar } from 'react-native'

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

const SecondSignUpPage: React.FC = (): JSX.Element => {
    const [valid, setValid] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //#region Effects

    useEffect(() => {
        StatusBar.setTranslucent(true)
        StatusBar.setBarStyle('dark-content')
    }, [])

    useEffect(() => {
        setValid(validateEmail(email) && validatePassword(password))
    }, [email, password])

    //#endregion

    return (
        //#region JSX

        <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <ContainerSafeAreaView>
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
                    />
                </FooterView>
            </ContainerSafeAreaView>
        </KeyboardAvoidingView>

        //#endregion
    )
}

SecondSignUpPage.displayName = 'SecondSignUpPage'

export default SecondSignUpPage
