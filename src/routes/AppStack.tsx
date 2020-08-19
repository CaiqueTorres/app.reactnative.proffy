import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import SignUpName from '../pages/SignUp/SignUpName'
import SignUpEmail from '../pages/SignUp/SignUpEmail'
import SignUpComplete from '../pages/SignUp/SignUpComplete'

const { Navigator, Screen } = createStackNavigator()

export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen name="Login" component={Login} />
                <Screen name="SignUpName" component={SignUpName} />
                <Screen name="SignUpEmail" component={SignUpEmail} />
                <Screen name="SignUpComplete" component={SignUpComplete} />
            </Navigator>
        </NavigationContainer>
    )
}
