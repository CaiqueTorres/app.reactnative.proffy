import React, { useEffect, useState } from 'react'
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    View
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StatusBar } from 'expo-status-bar'

import { AppStackParamsList } from '../../navigations/appStack'

import {
    ContainerSafeAreaView,
    IconView,
    IconBackgroundImage,
    LogoImage,
    LogoSubtitleText,
    ForgotPasswordView,
    ForgotPasswordTitle,
    ForgotPasswordSubtitle
} from './styles'

import AuthenticationTextInput from '../../components/atoms/AuthenticationTextInput'
import Button from '../../components/atoms/Button'

import { validateEmail } from '../../utils/validation'

import logoImage from '../../assets/icons/logo.png'
import loginPageBackgroundImage from '../../assets/login/login-page-background.png'

/**
 * The app's forgot password page
 */
const ForgotPasswordPage: React.FC = (): JSX.Element => {
    //#region States

    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'ForgotPasswordPage'>
    >()

    const [valid, setValid] = useState(false)
    const [email, setEmail] = useState('')

    //#endregion

    //#region Effects

    useEffect(() => {
        setValid(validateEmail(email))
    }, [email])

    //#endregion

    //#region Functions

    /**
     * Function that can make the app push the success page
     */
    function handleNavigateToSuccessPage(): void {
        navigation.push('SuccessPage', {
            title: 'Redefinição enviada!',
            subtitle:
                'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.',
            buttonTitle: 'Voltar ao login'
        })
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
                <ForgotPasswordView>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            navigation.pop()
                        }}
                    >
                        <AntDesign name="arrowleft" size={24} color="#9C98A6" />
                    </TouchableWithoutFeedback>
                    <View>
                        <ForgotPasswordTitle>
                            Esqueceu sua senha?
                        </ForgotPasswordTitle>
                        <ForgotPasswordSubtitle>
                            Não esquenta, vamos dar um jeito nisso.
                        </ForgotPasswordSubtitle>
                    </View>
                    <View>
                        <AuthenticationTextInput
                            keyboardType="email-address"
                            placeholder="E-mail"
                            colorTheme="#8257e5"
                            style={{ borderRadius: 10, height: 70 }}
                            onChangeText={setEmail}
                        />
                        <Button
                            enabled={valid}
                            enabledColor="#04D361"
                            text="Enviar e-mail"
                            style={{ height: 65, marginTop: 20 }}
                            onPress={handleNavigateToSuccessPage}
                        />
                    </View>
                </ForgotPasswordView>
            </ContainerSafeAreaView>
        </KeyboardAvoidingView>

        //#endregion
    )
}

ForgotPasswordPage.displayName = 'ForgotPasswordPage'

export default ForgotPasswordPage
