import React from 'react'
import { Text } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { StatusBar } from 'react-native'
import { RectButton } from "react-native-gesture-handler";

import backgroundImage from '../../assets/images/give-classes-background.png'

import {
    Container,
    LogoBox,
    BackgroundImage,
    LogoText,
    LoginBox,
    Header,
    Footer,
    InputEmail,
    InputPassword
} from './styles'

export default function Login() {
    return (
        //#region JSX

        <Container>
            <StatusBar barStyle="light-content" />
            <BackgroundImage source={backgroundImage}>
                <LogoBox>
                    <SvgUri height="85" width="220" source={require('../../assets/images/logo.svg')} />
                    <LogoText>Sua plataforma de estudo online</LogoText>
                </LogoBox>
                <LoginBox>
                    <Header>
                        <Text>Fazer login</Text>
                        <Text>Criar conta</Text>
                    </Header>

                    <InputEmail placeholder="E-mail" />
                    <InputPassword placeholder="Senha" />

                    <Footer>
                        <Text>Lembrar-me</Text>
                        <Text>Esqueci minha senha</Text>
                        <RectButton>
                            <Text>Entrar</Text>
                        </RectButton>
                    </Footer>
                </LoginBox>
            </BackgroundImage>
        </Container>

        //#endregion
    )
}
