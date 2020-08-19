import React, { useState } from 'react'
import { TouchableWithoutFeedback, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { ContainerView } from './styles'

interface CheckBoxProps {
    onPress?(isActive: boolean): any
    checkedBackgroundColor: string
    uncheckedBackgroundColor: string
}

const CheckBox: React.FC<CheckBoxProps> = ({
    onPress,
    checkedBackgroundColor,
    uncheckedBackgroundColor
}) => {

    const [isChecked, setIsChecked] = useState(false)

    function onPressHandler() {
        const newValue = !isChecked

        if (onPress)
            onPress(newValue)

        setIsChecked(newValue)
    }

    return (
        <TouchableWithoutFeedback
            onPress={onPressHandler}
        >
            <ContainerView style={[
                {
                    backgroundColor: isChecked
                        ? checkedBackgroundColor
                        : uncheckedBackgroundColor
                }
            ]}>
                <Ionicons
                    name="md-checkmark"
                    size={22}
                    color="#fff"
                />
            </ContainerView>
        </TouchableWithoutFeedback>
    )
}

export default CheckBox
