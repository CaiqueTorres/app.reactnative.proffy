import React, { useState } from 'react'
import {
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native'
// import Ionicons from '@expo/vector-icons'

import checkIcon from '../../assets/images/icons/check.png'

import styles from './styles'

interface CheckBoxProps {
    onPress(isActive: boolean): any
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

        onPress(newValue)
        setIsChecked(newValue)
    }

    return (
        <TouchableWithoutFeedback
            onPress={onPressHandler}
        >
            <View style={[
                {
                    backgroundColor: isChecked
                        ? checkedBackgroundColor
                        : uncheckedBackgroundColor
                },
                styles.container
            ]}>
                {/* <Ionicons  /> */}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CheckBox
