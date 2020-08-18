import React, { useState } from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import {
    RectButtonBackground,
    RectButtonText
} from './styles'

interface ButtonProps extends RectButtonProperties {
    enabled: boolean
    textEnabled?: string
    textDisabled?: string
    backgroundColorEnabled?: string
    backgroundColorDisabled?: string
    textColorEnable?: string
    textColorDisabled?: string
}

const Button: React.FC<ButtonProps> = ({
    enabled,
    textEnabled,
    textDisabled,
    backgroundColorEnabled,
    backgroundColorDisabled,
    textColorEnable,
    textColorDisabled,
    ...rest
}) => {

    const [isEnabled, setIsEnabled] = useState(enabled)

    return (
        <RectButtonBackground
            style={{
                backgroundColor: isEnabled
                    ? backgroundColorEnabled
                    : backgroundColorDisabled
            }}
            {...rest}
        >
            {(textEnabled || textDisabled) &&
                <RectButtonText
                    style={{
                        color: isEnabled
                            ? textColorEnable
                            : textColorDisabled
                    }}
                >
                    {isEnabled ? textEnabled : textDisabled}
                </RectButtonText>}
        </RectButtonBackground>
    )
}

export default Button;
