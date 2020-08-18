import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import SignUpName from '../pages/SignUp/SignUpName'
import SignUpEmail from '../pages/SignUp/SignUpEmail'

const { Navigator, Screen } = createStackNavigator()

export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen name="Login" component={Login} />
                <Screen name="SignUp" component={SignUpName} />
            </Navigator>
        </NavigationContainer>
    )
}
