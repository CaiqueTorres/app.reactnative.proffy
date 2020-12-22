import React, { useState } from 'react'
import { createContext } from 'react'

import LoadingScreen from '../components/molecules/LoadingScreen'

/**
 * The interface that has all the needed properties that will be used to
 * control the loading screen visibility
 */
export interface LoadingScreenData {
    enabledLoading: boolean
    setEnabledLoading: (value: boolean) => void
}

/**
 * The context that allows all the app components change the loading screen
 * visibility
 */
export const LoadingScreenContext = createContext<LoadingScreenData>(
    {} as LoadingScreenData
)

/**
 * The loading screen provider properties
 */
export interface LoadingScreenProviderProps {
    children: JSX.Element
}

/**
 * The provider that can control the loading screen visibility
 */
export const LoadingScreenProvider: React.FC<LoadingScreenProviderProps> = ({
    children
}: LoadingScreenProviderProps): JSX.Element => {
    //#region States

    const [enabledLoading, setEnabledLoading] = useState(false)

    //#endregion

    return (
        //#region JSX

        <LoadingScreenContext.Provider
            value={{
                enabledLoading,
                setEnabledLoading
            }}
        >
            {children}
            <LoadingScreen
                animationType="fade"
                transparent={true}
                visible={enabledLoading}
            />
        </LoadingScreenContext.Provider>

        //#endregion
    )
}

export default LoadingScreenProvider
