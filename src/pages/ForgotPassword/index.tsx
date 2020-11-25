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

import { AppStackParamsList } from '../../routes/AppStack'

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

import loginPageBackgroundImage from '../../assets/images/login/login-page-background.png'
import logoImage from '../../assets/images/logo.png'
import { validateEmail } from '../../utils/validationFunctions'

/**
 * The app's forgot password page
 */
const ForgotPasswordPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'ForgotPasswordPage'>
    >()

    const [valid, setValid] = useState(false)
    const [email, setEmail] = useState('')

    //#region Effects

    useEffect(() => {
        setValid(validateEmail(email))
    }, [email])

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
                            text="Concluir cadastro"
                            style={{ height: 65, marginTop: 20 }}
                            onPress={() => {
                                navigation.push('SuccessPage', {
                                    title: 'Redefinição enviada!',
                                    subtitle:
                                        'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.',
                                    buttonTitle: 'Voltar ao login'
                                })
                            }}
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
