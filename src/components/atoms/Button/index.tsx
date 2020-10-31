import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { ContainerRectButton, ContainerText } from './styles'

/**
 * The interface that will be implemented in Button component
 *
 * It stores the RectButton properties and the Button properties
 */
export interface ButtonProps extends RectButtonProperties {
    readonly enabled: boolean
    readonly text?: string
    readonly enabledColor?: string
    readonly disabledColor?: string
    readonly textEnabledColor?: string
    readonly textDisabledColor?: string
}

/**
 * The main button component in the app
 *
 * This component has the same properties as the RectButton, it must be used in
 * project when a button is needed
 */
const Button: React.FC<ButtonProps> = ({
    enabled,
    text,
    enabledColor = '#04d361',
    disabledColor = '#DCDCE5',
    textEnabledColor = '#fff',
    textDisabledColor = '#9C98A6',
    onPress,
    ...rest
}: ButtonProps): JSX.Element => {
    //#region Functions

    /**
     * Function that run the onPress event just when the button is activated
     */
    function handleOnPress(pointerInside: boolean): void {
        if (enabled && onPress) onPress(pointerInside)
    }

    //#endregion

    return (
        //#region JSX

        <ContainerRectButton
            backgroundColor={enabled ? enabledColor : disabledColor}
            onPress={handleOnPress}
            {...rest}
        >
            <ContainerText
                color={enabled ? textEnabledColor : textDisabledColor}
            >
                {text}
            </ContainerText>
        </ContainerRectButton>

        //#endregion
    )
}

Button.displayName = 'Button'

export default Button
