import React, { useState, useEffect } from 'react'
import SvgUri from 'react-native-svg-uri'
import {
    View,
    SafeAreaView,
    ImageBackground,
    Platform,
    Keyboard
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParamList } from '../../routes/AppStack'
import Checkbox from '../../components/CheckBox'
import Button from '../../components/Button'

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
    ForgetText
} from './styles'


export type DefaultLoginScreenProps = StackScreenProps<
    RootStackParamList,
    'Login'
>

export default function Login({ navigation }: DefaultLoginScreenProps) {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        return () => {
            Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
        };
    }, []);

    function keyboardDidShow() {
        setIsKeyboardOpen(true)
    }

    function keyboardDidHide() {
        setIsKeyboardOpen(false)
    }

    function handleNavigateToSignUp() {
        navigation.navigate('SignUpName')
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
                        <View style={{ display: isKeyboardOpen ? "none" : "flex" }}>
                            <SvgUri
                                fill="#fff"
                                height="85"
                                width="220"
                                source={require("../../assets/images/logo.svg")}
                            />
                            <LogoText>Sua plataforma de estudo online</LogoText>
                        </View>
                    </LogoView>

                    <LoginView>
                        <LoginHeaderView>
                            <LoginText>Fazer login</LoginText>
                            <CreateAccountText
                                onPress={handleNavigateToSignUp}
                            >
                                Criar uma conta
                            </CreateAccountText>
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

                        <Button
                            enabled
                            textEnabled="Entrar"
                            textDisabled="Entrar"
                            backgroundColorEnabled="#04D361"
                            backgroundColorDisabled="#DCDCE5"
                            textColorEnable="#FFF"
                            textColorDisabled="#9C98A6"
                        />
                    </LoginView>
                </ImageBackground>
            </SafeAreaView>
        </ContainerKeyboardAvoidingView>

        //#endregion
    )
}
