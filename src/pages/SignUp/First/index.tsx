import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StatusBar } from 'expo-status-bar'

import { AppStackParamsList } from '../../../routes/appStack'

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

import { isStringEmpty } from '../../../utils/validation'
import SignUpHeader from '../Header'

/**
 * The first sign up page
 *
 * This page is responsible to get the user name and last name
 */
const FirstSignUpPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'FirstSignUpPage'>
    >()

    const [valid, setValid] = useState(false)
    const [name, setName] = useState('')
    const [lastName, setMiddleName] = useState('')

    //#region Effects

    useEffect(() => {
        setValid(!isStringEmpty(name) && !isStringEmpty(lastName))
    }, [name, lastName])

    //#endregion

    return (
        //#region JSX

        <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <StatusBar translucent style="dark" />
            <ContainerSafeAreaView>
                <SignUpHeader
                    dotsAmount={2}
                    selectedDot={0}
                    onPress={() => navigation.pop()}
                />
                <TitleView>
                    <TitleText>Crie sua conta gratuíta</TitleText>
                    <SubtitleText>
                        Basta preencher esses dados e você estará conosco.
                    </SubtitleText>
                </TitleView>
                <FooterView>
                    <FooterTitle>01. Quem é você?</FooterTitle>
                    <TextsInputView>
                        <AuthenticationTextInput
                            placeholder="Nome"
                            colorTheme="#8257e5"
                            style={{
                                borderBottomWidth: 0,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }}
                            onChangeText={setName}
                        />
                        <AuthenticationTextInput
                            placeholder="Sobrenome"
                            colorTheme="#8257e5"
                            style={{
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10
                            }}
                            onChangeText={setMiddleName}
                        />
                    </TextsInputView>
                    <Button
                        enabledColor="#8257e5"
                        text="Próximo"
                        enabled={valid}
                        style={{ height: 65 }}
                        onPress={() => {
                            navigation.push('SecondSignUpPage')
                        }}
                    />
                </FooterView>
            </ContainerSafeAreaView>
        </KeyboardAvoidingView>

        //#endregion
    )
}

FirstSignUpPage.displayName = 'FirstSignUpPage'

export default FirstSignUpPage
