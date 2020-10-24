import React from 'react'
import { TextInputProps as TextInputPropsRN } from 'react-native'

import { ContainerView } from './styles'

export type TextInputProps = TextInputPropsRN {}

const TextInput: React.FC<TextInputProps> = ({}: TextInputProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerView />

        //#endregion
    )
}

TextInput.displayName = 'TextInput'

export default TextInput
