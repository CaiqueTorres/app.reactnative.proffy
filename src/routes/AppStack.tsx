import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import SignUpName from '../pages/SignUp/SignUpName'
import SignUpEmail from '../pages/SignUp/SignUpEmail'
import SignUpComplete from '../pages/SignUp/SignUpComplete'
import PresentationFirstPage from '../pages/Presentation/FirstPage'
import PresentationSecondPage from '../pages/Presentation/SecondPage'

import 'react-native-gesture-handler';

export type RootStackParamList = {
    Login: undefined
    SignUpName: undefined
    SignUpEmail: undefined
    SignUpComplete: undefined
    PresentationFirstPage: undefined
    PresentationSecondPage: undefined
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="PresentationFirstPage"
            >
                <Screen name="PresentationFirstPage" component={PresentationFirstPage} />
                <Screen name="PresentationSecondPage" component={PresentationSecondPage} />
                <Screen name="Login" component={Login} />
                <Screen name="SignUpName" component={SignUpName} />
                <Screen name="SignUpEmail" component={SignUpEmail} />
                <Screen name="SignUpComplete" component={SignUpComplete} />
            </Navigator>
        </NavigationContainer>
    )
}
