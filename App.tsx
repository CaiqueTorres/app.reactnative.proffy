import React from 'react';
import { AppLoading } from "expo";

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import AppStack from './src/routes/AppStack'
import { StatusBar } from 'react-native';

let fontsLoaded: boolean

export default function App() {
    loadFonts()

    StatusBar.setBarStyle("light-content")
    StatusBar.setTranslucent(true)

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <AppStack />
    );
}

function loadFonts() {
    [fontsLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold,
    })
}
