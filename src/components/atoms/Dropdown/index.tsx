import React, { useState } from 'react'
import { PickerProps } from 'react-native'

import { ContainerView, TitleText, PickerView, ContainerPicker } from './styles'

export interface DropdownProps extends PickerProps {
    title?: string
    children?: JSX.Element[]
}

const Dropdown: React.FC<DropdownProps> = ({
    title,
    children,
    ...rest
}: DropdownProps): JSX.Element => {
    const [value, setValue] = useState('')

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
