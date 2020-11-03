import React from 'react'
import {
    StyleProp,
    View,
    ViewStyle,
    TextInputProps as TextInputPropsRN
} from 'react-native'

import { TitleText, ContainerTextInput } from './styles'

/**
 * The main app's text input properties
 */
export interface TextInputProps extends TextInputPropsRN {
    readonly title: string
    readonly viewStyle?: StyleProp<ViewStyle>
}

/**
 * The main app's text input
 */
const TextInput: React.FC<TextInputProps> = ({
    title,
    viewStyle,
    ...rest
}: TextInputProps): JSX.Element => {
    return (
        //#region JSX

        <View style={viewStyle}>
            <TitleText>{title}</TitleText>
            <ContainerTextInput {...rest} />
        </View>

        //#endregion
    )
}

TextInput.displayName = 'TextInput'

export default TextInput
