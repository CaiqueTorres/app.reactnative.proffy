import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const { Navigator, Screen } = createStackNavigator()

export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen name="Login" component={Login} />
                <Screen name="SignUp" component={SignUp} />
            </Navigator>
        </NavigationContainer>
    )
}
