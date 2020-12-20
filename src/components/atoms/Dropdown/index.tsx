import React, { useState } from 'react'
import { PickerProps } from 'react-native'

import { ContainerView, TitleText, PickerView, ContainerPicker } from './styles'

/**
 * The main app's dropdown component properties
 */
export interface DropdownProps extends PickerProps {
    defaultValue?: string | number | undefined
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
    onValueChange,
    ...rest
}: DropdownProps): JSX.Element => {
    const [value, setValue] = useState<string | number | undefined>(
        defaultValue
    )

    //#region Functions

    /**
     * Function that handles all the logic that will be runned on value changed
     * @param itemValue stores the selected item value
     * @param itemPosition stores the selected item position in array
     */
    function handleOnValueChanged(
        itemValue: unknown,
        itemPosition: number
    ): void {
        setValue(itemValue as string)
        if (onValueChange) onValueChange(itemValue, itemPosition)
    }

    //#endregion

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <PickerView>
                <ContainerPicker
                    mode="dialog"
                    selectedValue={value}
                    onValueChange={handleOnValueChanged}
                    {...rest}
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
