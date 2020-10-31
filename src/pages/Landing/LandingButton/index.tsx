import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { ContainerRectButton, TitleText } from './styles'

/**
 * The app's lading page main button properties
 */
export interface LandingButtonProps extends RectButtonProperties {
    readonly title: string
    readonly children: JSX.Element
}

/**
 * The app's landing page main button
 */
const LandingButton: React.FC<LandingButtonProps> = ({
    title,
    children,
    ...rest
}: LandingButtonProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerRectButton {...rest}>
            {children}
            <TitleText>{title}</TitleText>
        </ContainerRectButton>

        //#endregion
    )
}

LandingButton.displayName = 'LandingButton'

export default LandingButton
