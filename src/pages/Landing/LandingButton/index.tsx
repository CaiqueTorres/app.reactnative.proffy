import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { ContainerRectButton, TitleText } from './styles'

export interface LandingButtonProps extends RectButtonProperties {
    readonly title: string
    readonly children: JSX.Element
}

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
