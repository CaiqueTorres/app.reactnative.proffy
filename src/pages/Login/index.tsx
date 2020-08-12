import React from 'react'
import SvgUri from 'react-native-svg-uri'
import { View, Text, ImageBackground, TextInput, StatusBar } from 'react-native'

import Button from '../../components/Button'
import Checkbox from '../../components/CheckBox'

import backgroundImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

export default function Login() {

    function onPressCheckBox() {
        console.log('clicked')
    }

    return (
        //#region JSX

        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                style={styles.backgroundImage}
                source={backgroundImage}
            >
                <View style={styles.logoBox}>
                    <View style={styles.logoTexts}>
                        <SvgUri height="85" width="220" source={require('../../assets/images/logo.svg')} />
                        <Text style={styles.logoText}>Sua plataforma de estudo online</Text>
                    </View>
                </View>
                <View style={styles.loginBox}>
                    <View style={styles.header}>
                        <Text style={styles.doLogin}>Fazer login</Text>
                        <Text style={styles.createAccount}>Criar uma conta</Text>
                    </View>

                    <View style={styles.inputBox}>
                        <TextInput style={styles.emailInput} placeholder="E-mail" />
                        <TextInput style={styles.passwordInput} placeholder="Senha" />
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.footerHeader}>
                            <Checkbox onPress={onPressCheckBox} />
                            <Text style={styles.remindMe}>Lembrar-me</Text>
                            <Text style={styles.forget}>Esqueci minha senha</Text>
                        </View>
                        <Button onPress={onPressCheckBox} style={styles.footerButton}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </View>

        //#endregion
    )
}
