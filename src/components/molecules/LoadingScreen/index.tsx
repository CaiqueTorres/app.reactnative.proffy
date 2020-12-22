import React from 'react'
import { ActivityIndicator, Modal, ModalProps } from 'react-native'

import { ContainerView } from './styles'

const LoadingScreen: React.FC<ModalProps> = ({ ...rest }): JSX.Element => {
    return (
        //#region JSX

        <Modal {...rest}>
            <ContainerView>
                <ActivityIndicator size={60} color="#8257e5" />
            </ContainerView>
        </Modal>

        //#endregion
    )
}

LoadingScreen.displayName = 'LoadingScreen'

export default LoadingScreen
