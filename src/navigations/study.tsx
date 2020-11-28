import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FavoritesPage from '../pages/Favorites'
import ProffysPage from '../pages/Proffys'

/**
 * The study tab navigation params
 */
export type StudyTabNavigationParamsList = {
    readonly ProffysPage: undefined
    readonly FavoritesPage: undefined
}

const Tab = createBottomTabNavigator<StudyTabNavigationParamsList>()

/**
 * The navigation component of the study flow (proffy and favorites page)
 */
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
