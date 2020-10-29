import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { ContainerView } from './styles'

/**
 * The header's dot copmonetn properties
 */
export interface DotProps {
    selected: boolean
    selectedColor?: string
    deselectedColor?: string
    style?: StyleProp<ViewStyle>
}

/**
 * The header's dot component
 *
 * This component must be used just in register flow
 */
const Dot: React.FC<DotProps> = ({
    selected,
    selectedColor = '#515151',
    deselectedColor = '#C1BCCC',
    style
}: DotProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerView
            style={style}
            background={selected ? selectedColor : deselectedColor}
        />

        //#endregion
    )
}

Dot.displayName = 'Dot'

export default Dot
