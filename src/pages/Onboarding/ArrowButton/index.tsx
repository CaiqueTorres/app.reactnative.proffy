import React from 'react'
import { RectButton } from 'react-native-gesture-handler'

import { AntDesign } from '@expo/vector-icons'

export interface ArrowRectButtonProps {
    onPress?(): void
}

/**
 * The arrow button, that is displayed in Onboarding page
 */
const ArrowRectButton: React.FC<ArrowRectButtonProps> = ({
    onPress
}: ArrowRectButtonProps): JSX.Element => {
    return (
        //#region JSX

        <RectButton
            style={{
                width: 100,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                borderRadius: 15
            }}
            onPress={onPress}
        >
            <AntDesign name="arrowright" size={24} color="#9C98A6" />
        </RectButton>

        //#endregion
    )
}

ArrowRectButton.displayName = 'ArrowRectButton'

export default ArrowRectButton
