import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { ContainerView } from './styles'

export interface DotProps {
    selected: boolean
    selectedColor?: string
    deselectedColor?: string
    style?: StyleProp<ViewStyle>
}

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
