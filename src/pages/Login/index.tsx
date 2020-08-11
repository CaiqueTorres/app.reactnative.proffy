import React from 'react'
import SvgUri from 'react-native-svg-uri'
import { View, Text, ImageBackground, TextInput, StatusBar } from 'react-native'
import { RectButton } from "react-native-gesture-handler";

import backgroundImage from '../../assets/images/give-classes-background.png'

import { styles } from './styles'

export default function Login() {
    return (
        //#region JSX

        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
                <View style={styles.logoBox}>
                    <SvgUri height="85" width="220" source={require('../../assets/images/logo.svg')} />
                    <Text style={styles.logoText}>Sua plataforma de estudo online</Text>
                </View>
                <View style={styles.loginBox}>
                    <View style={styles.header}>
                        <Text style={styles.doLogin}>Fazer login</Text>
                        <Text style={styles.createAccount}>Criar conta</Text>
                    </View>

                    <TextInput style={styles.inputEmail} placeholder="E-mail" />
                    <TextInput style={styles.passwordInput} placeholder="Senha" />

                    <View style={styles.footer}>
                        <View style={styles.footerHeader}>
                            <Text>Lembrar-me</Text>
                            <Text>Esqueci minha senha</Text>
                        </View>
                        <RectButton style={styles.footerButton}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </RectButton>
                    </View>
                </View>
            </ImageBackground>
        </View>

        //#endregion
    )
}
