import React, { useState } from 'react'
import { createContext } from 'react'

export interface LoadingScreenData {
    enabled: boolean
    setEnabled: (value: boolean) => void
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
    const [enabled, setEnabled] = useState(false)

    return (
        //#region JSX

        <LoadingScreenContext.Provider value={{ enabled, setEnabled }}>
            {children}
        </LoadingScreenContext.Provider>

        //#endregion
    )
}

export default LoadingScreenProvider
