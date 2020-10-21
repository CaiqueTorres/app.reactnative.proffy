import React from 'react'
import { View } from 'react-native'

export interface DotProps {
    selected: boolean
    selectedColor: string
    deselectedColor: string
}

/**
 * The dot component that will be displayed in Onboarding page
 * to show which page the user is visualizating
 */
const Dot: React.FC<DotProps> = ({
    selected,
    selectedColor,
    deselectedColor
}: DotProps): JSX.Element => {
    return (
        //#region JSX

        <View
            style={{
                width: 9,
                height: 9,
                borderRadius: 3,
                marginHorizontal: 3,
                backgroundColor: selected ? selectedColor : deselectedColor
            }}
        />

        //#endregion
    )
}

Dot.displayName = 'Dot'

export default Dot
