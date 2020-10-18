import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types'

import Onboarding from '../pages/Onboarding'

export type AppStackParamsList = {
    Onboarding: undefined
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
            <Navigator>
                <Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        transitionSpec: {
                            open: config,
                            close: config
                        }
                    }}
                />
            </Navigator>
        </NavigationContainer>

        //#endregion
    )
}
