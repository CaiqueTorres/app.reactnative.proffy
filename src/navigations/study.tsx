import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import FavoritesPage from '../pages/Favorites'
import ProffysPage from '../pages/Proffys'

export type StudyTabNavigationParamsList = {
    readonly ProffysPage: undefined
    readonly FavoritesPage: undefined
}

const Tab = createBottomTabNavigator<StudyTabNavigationParamsList>()

const StudyTabNavigation: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="ProffysPage" component={ProffysPage} />
                <Tab.Screen name="FavoritesPage" component={FavoritesPage} />
            </Tab.Navigator>
        </NavigationContainer>

        //#endregion
    )
}

StudyTabNavigation.displayName = 'StudyTabNavigation'

export default StudyTabNavigation
