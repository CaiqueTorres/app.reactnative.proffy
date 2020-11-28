/* eslint-disable react/display-name */
import React from 'react'

import { Archivo_400Regular } from '@expo-google-fonts/archivo'
import { Feather } from '@expo/vector-icons'
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

export interface TabBarIconProps {
    focused: boolean
    color: string
    size: number
}

const Tab = createBottomTabNavigator<StudyTabNavigationParamsList>()

/**
 * The navigation component of the study flow (proffy and favorites page)
 */
const StudyTabNavigation: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <Tab.Navigator
            initialRouteName="ProffysPage"
            tabBarOptions={{
                activeBackgroundColor: '#EBEBF5',
                inactiveBackgroundColor: '#FAFAFC',
                activeTintColor: '#32264C',
                inactiveTintColor: '#C1BCCC',
                style: { height: 74 },
                iconStyle: {
                    height: 50,
                    width: 50,
                    maxWidth: 50
                },
                labelStyle: {
                    fontSize: 12,
                    fontFamily: 'Archivo_400Regular'
                },
                tabStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }
            }}
        >
            <Tab.Screen
                name="ProffysPage"
                component={ProffysPage}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ focused, size }: TabBarIconProps) => {
                        return (
                            <Feather
                                name="tv"
                                size={size}
                                color={focused ? '#8257E5' : '#C1BCCC'}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="FavoritesPage"
                component={FavoritesPage}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ focused, size }: TabBarIconProps) => {
                        return (
                            <Feather
                                name="heart"
                                size={size}
                                color={focused ? '#8257E5' : '#C1BCCC'}
                            />
                        )
                    },
                    tabBarBadgeStyle: {
                        borderTopWidth: 2,
                        borderTopColor: 'red'
                    }
                }}
            />
        </Tab.Navigator>

        //#endregion
    )
}

StudyTabNavigation.displayName = 'StudyTabNavigation'

export default StudyTabNavigation
