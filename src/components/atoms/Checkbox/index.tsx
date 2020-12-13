import React, { useEffect } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import useToggle from '../../../hooks/useToggle'

import { ContainerView, ToggleView } from './styles'

/**
 * The main app's checkbox component properties
 */
export interface CheckboxProps {
    onPress?(value: boolean): void
    readonly initialValue?: boolean
    readonly boxSize?: number
    readonly boxActiveColor?: string
    readonly boxDeactiveColor?: string
    readonly activeIcon?: JSX.Element
    readonly deactiveIcon?: JSX.Element
    readonly children?: JSX.Element
}

/**
 * The main app's checkbox component
 */
const Checkbox: React.FC<CheckboxProps> = ({
    initialValue,
    onPress,
    activeIcon,
    deactiveIcon,
    boxActiveColor = '#8257E5',
    boxDeactiveColor = '#fff',
    boxSize = 30,
    children
}: CheckboxProps): JSX.Element => {
    const [active, toggleValue] = useToggle(initialValue)

    //#region Effects

    useEffect(() => {
        if (onPress) onPress(active)
    }, [active])

    //#endregion

    return (
        //#region JSX

        <TouchableWithoutFeedback onPress={() => toggleValue()}>
            <ContainerView>
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
                {children}
            </ContainerView>
        </TouchableWithoutFeedback>

        //#endregion
    )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
