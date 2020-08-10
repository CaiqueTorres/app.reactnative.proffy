import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import SvgUri from 'react-native-svg-uri'

import backgroundImage from '../../assets/images/give-classes-background.png'

import { styles } from './styles'

export default function Login() {
    return (
        //#region JSX

        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
                <View style={styles.logoBox}>
                    <SvgUri height="85" width="220" source={require('../../assets/images/logo.svg')} />
                    <Text style={styles.logoText} >Sua plataforma de estudo online</Text>
                </View>
                <View style={styles.loginBox}>
                    <Text>Login</Text>
                </View>
            </ImageBackground>
        </View>

        //#endregion
    )
}
