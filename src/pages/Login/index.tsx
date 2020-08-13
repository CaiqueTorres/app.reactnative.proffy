import React from 'react'
import SvgUri from 'react-native-svg-uri'
import { View, Text, ImageBackground, TextInput, StatusBar } from 'react-native'

import Button from '../../components/Button'
import Checkbox from '../../components/CheckBox'
import LoginTextInput from '../../components/LoginTextInput'

import backgroundImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

export default function Login() {
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
                        <LoginTextInput
                            style={{
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }}
                            transition={175}
                            placeholder="E-mail"
                        />
                        <LoginTextInput
                            style={{
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10
                            }}
                            transition={175}
                            placeholder="Senha"
                        />
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.footerHeader}>
                            <View style={styles.remindBox}>
                                <Checkbox
                                    uncheckedBackgroundColor="#fff"
                                    checkedBackgroundColor="#04D361"
                                />
                                <Text style={styles.remindMe}>Lembrar-me</Text>
                            </View>
                            <Text style={styles.forgetText}>Esqueci minha senha</Text>
                        </View>
                        <Button style={styles.footerButton}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </View>

        //#endregion
    )
}
