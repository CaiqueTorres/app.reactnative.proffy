import React, { useState } from 'react'
import { createContext } from 'react'

import LoadingScreen from '../components/molecules/LoadingScreen'

export interface LoadingScreenData {
    enabledLoading: boolean
    setEnabledLoading: (value: boolean) => void
}

export interface LoadingScreenProviderProps {
    children: JSX.Element
}

export const LoadingScreenContext = createContext<LoadingScreenData>(
    {} as LoadingScreenData
)

export const LoadingScreenProvider: React.FC<LoadingScreenProviderProps> = ({
    children
}: LoadingScreenProviderProps): JSX.Element => {
    const [enabledLoading, setEnabledLoading] = useState(false)

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
