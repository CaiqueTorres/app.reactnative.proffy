import React, { useState } from 'react'
import { PickerProps } from 'react-native'

import { ContainerView, TitleText, PickerView, ContainerPicker } from './styles'

/**
 * The main app's dropdown component properties
 */
export interface DropdownProps extends PickerProps {
    defaultValue?: string
    title?: string
    children?: JSX.Element[]
}

/**
 * The main app's dropdown component
 */
const Dropdown: React.FC<DropdownProps> = ({
    defaultValue,
    title,
    children,
    ...rest
}: DropdownProps): JSX.Element => {
    const [value, setValue] = useState(defaultValue)

    return (
        //#region JSX

        <ContainerView {...rest}>
            <TitleText>{title}</TitleText>
            <PickerView>
                <ContainerPicker
                    mode="dialog"
                    selectedValue={value}
                    onValueChange={(itemValue: string | number) =>
                        setValue(itemValue as string)
                    }
                >
                    {children}
                </ContainerPicker>
            </PickerView>
        </ContainerView>

        //#endregion
    )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown
