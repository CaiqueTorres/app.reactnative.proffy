import React from 'react'
import { ActivityIndicator, Modal, ModalProps } from 'react-native'

import { ContainerView } from './styles'

/**
 * The main app's loading screen properties
 */
export interface LoadingScreenProps extends ModalProps {
    readonly size?: number | 'small' | 'large'
    readonly color?: string
}

/**
 * The main app's loading screen
 */
const LoadingScreen: React.FC<LoadingScreenProps> = ({
    size = 60,
    color = '#8257e5',
    ...rest
}: LoadingScreenProps): JSX.Element => {
    return (
        //#region JSX

        <Modal {...rest}>
            <ContainerView>
                <ActivityIndicator size={size} color={color} />
            </ContainerView>
        </Modal>

        //#endregion
    )
}

LoadingScreen.displayName = 'LoadingScreen'

export default LoadingScreen
