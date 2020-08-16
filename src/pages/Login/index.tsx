import React, { useEffect, useState } from 'react'
import SvgUri from 'react-native-svg-uri'
import { useNavigation } from '@react-navigation/native'
import {
    View,
    SafeAreaView,
    ImageBackground,
    Platform,
} from 'react-native'
import { Keyboard } from 'react-native'

import Checkbox from '../../components/CheckBox'

import backgroundImage from '../../assets/images/give-classes-background.png'

import {
    ContainerKeyboardAvoidingView,
    LogoView,
    LoginView,
    LogoText,
    LoginHeaderView,
    LoginText,
    CreateAccountText,
    InputsView,
    EmailInput,
    PasswordInput,
    PasswordManagerView,
    RemindMeView,
    RemindMeText,
    ForgetText,
    FooterRectButton,
    FooterRectButtonText
} from './styles'

export default function Login() {

    const { navigate } = useNavigation()
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
        };
    }, []);

    function keyboardDidShow() {
        setIsKeyboardOpen(true)
    }

    function keyboardDidHide() {
        setIsKeyboardOpen(false)
    }

    function handleNavigateToSignUp() {
        navigate('SignUp')
    }

    return (
        //#region JSX

        <ContainerKeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: "#8257E5" }}>
                <ImageBackground
                    style={{ flex: 1 }}
                    source={backgroundImage}
                >
                    <LogoView>
                        <View style={{display: isKeyboardOpen ? "none" : "flex"}}>
                            <SvgUri
                                fill="#fff"
                                height="85"
                                width="220"
                                source={require('../../assets/images/logo.svg')}
                            />
                            <LogoText>Sua plataforma de estudo online</LogoText>
                        </View>
                    </LogoView>

                    <LoginView>
                        <LoginHeaderView>
                            <LoginText>Fazer login</LoginText>
                            <CreateAccountText
                                onPress={handleNavigateToSignUp}
                            >Criar uma conta</CreateAccountText>
                        </LoginHeaderView>

                        <InputsView>
                            <EmailInput
                                placeholder="E-mail"
                                transition={150}
                            />
                            <PasswordInput
                                placeholder="Senha"
                                transition={150}
                                isPassword
                            />
                        </InputsView>

                        <PasswordManagerView>
                            <RemindMeView>
                                <Checkbox
                                    checkedBackgroundColor="#04D361"
                                    uncheckedBackgroundColor="#fff"
                                />
                                <RemindMeText>Lembrar-me</RemindMeText>
                            </RemindMeView>

                            <ForgetText>Esqueci minha senha</ForgetText>
                        </PasswordManagerView>

                        <FooterRectButton>
                            <FooterRectButtonText>Entrar</FooterRectButtonText>
                        </FooterRectButton>
                    </LoginView>
                </ImageBackground>
            </SafeAreaView>
        </ContainerKeyboardAvoidingView>

        //#endregion
    )
}
