import React from 'react'
import { Provider } from 'react-redux'

import {
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold
} from '@expo-google-fonts/archivo'
import {
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'

import store from './src/store'

import LoadingScreenProvider from './src/contexts/loadingScreenContext'
import SubjectProvider from './src/contexts/subjectContext'
import TimeProvider from './src/contexts/timeContext'

import AppStack from './src/navigations/appStack'

export default function App(): JSX.Element {
    const [fontsLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_600SemiBold,
        Archivo_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
    })

    if (!fontsLoaded) return <AppLoading />

    return (
        //#region JSX

        <Provider store={store}>
            <LoadingScreenProvider>
                <TimeProvider>
                    <SubjectProvider>
                        <AppStack />
                    </SubjectProvider>
                </TimeProvider>
            </LoadingScreenProvider>
        </Provider>

        //#endregion
    )
}
