import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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

        <Tab.Navigator initialRouteName="ProffysPage">
            <Tab.Screen name="ProffysPage" component={ProffysPage} />
            <Tab.Screen name="FavoritesPage" component={FavoritesPage} />
        </Tab.Navigator>

        //#endregion
    )
}

StudyTabNavigation.displayName = 'StudyTabNavigation'

export default StudyTabNavigation
