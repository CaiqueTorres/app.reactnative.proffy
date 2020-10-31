import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types'

import ForgotPasswordPage from '../pages/ForgotPassword'
import LoginPage from '../pages/Login'
import OnboardingPage from '../pages/Onboarding'
import FirstSignUpPage from '../pages/SignUp/First'
import SecondSignUpPage from '../pages/SignUp/Second'
import SuccessPage, { SuccessPageProps } from '../pages/Success'

export type AppStackParamsList = {
    readonly OnboardingPage: undefined
    readonly LoginPage: undefined
    readonly FirstSignUpPage: undefined
    readonly SecondSignUpPage: undefined
    readonly SuccessPage: SuccessPageProps
    readonly ForgotPasswordPage: undefined
}

const { Navigator, Screen } = createStackNavigator<AppStackParamsList>()

const config: TransitionSpec = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01
    }
}

/**
 * The app stack component that stores the main app navigation logic
 */
export default function AppStack(): JSX.Element {
    return (
        //#region JSX

        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="OnboardingPage"
            >
                <Screen
                    name="OnboardingPage"
                    component={OnboardingPage}
                    options={{
                        transitionSpec: {
                            open: config,
                            close: config
                        }
                    }}
                />
                <Screen name="LoginPage" component={LoginPage} />
                <Screen name="FirstSignUpPage" component={FirstSignUpPage} />
                <Screen name="SecondSignUpPage" component={SecondSignUpPage} />
                <Screen name="SuccessPage" component={SuccessPage} />
                <Screen
                    name="ForgotPasswordPage"
                    component={ForgotPasswordPage}
                />
            </Navigator>
        </NavigationContainer>

        //#endregion
    )
}
