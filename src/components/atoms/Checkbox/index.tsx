import React, { useEffect } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { ContainerView, ToggleView } from './styles'

import useToggle from '../../../hooks/useToggle'

/**
 * The main app's checkbox component properties
 */
export interface CheckboxProps {
    onPress?(value: boolean): void
    boxSize?: number
    boxActiveColor?: string
    boxDeactiveColor?: string
    activeIcon?: JSX.Element
    deactiveIcon?: JSX.Element
    children?: JSX.Element
}

/**
 * The main app's checkbox component
 */
const Checkbox: React.FC<CheckboxProps> = ({
    onPress,
    activeIcon,
    deactiveIcon,
    boxActiveColor = '#8257E5',
    boxDeactiveColor = '#fff',
    boxSize = 30,
    children
}: CheckboxProps): JSX.Element => {
    const [active, toggleValue] = useToggle(false)

    useEffect(() => {
        if (onPress) onPress(active)
    }, [active])

    return (
        //#region JSX

        <ContainerView>
            <TouchableWithoutFeedback onPress={() => toggleValue()}>
                <ToggleView
                    boxColor={boxActiveColor}
                    size={boxSize}
                    style={{
                        width: boxSize,
                        height: boxSize,
                        backgroundColor: active
                            ? boxActiveColor
                            : boxDeactiveColor,
                        borderWidth: active ? 0 : 2
                    }}
                >
                    {active ? activeIcon : deactiveIcon}
                </ToggleView>
            </TouchableWithoutFeedback>
            {children}
        </ContainerView>

        //#endregion
    )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
