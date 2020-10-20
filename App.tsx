import React from 'react'

import {
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold
} from '@expo-google-fonts/archivo'
import {
    Poppins_400Regular,
    Poppins_600SemiBold
} from '@expo-google-fonts/poppins'

import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'

import AppStack from './src/routes/AppStack'

export default function App(): JSX.Element {
    const [fontsLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_600SemiBold,
        Archivo_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold
    })

    if (!fontsLoaded) return <AppLoading />

    return (
        //#region JSX

        <AppStack />

        //#endregion
    )
}
