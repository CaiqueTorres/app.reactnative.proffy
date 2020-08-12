import React, { useState } from 'react'
import {
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProperties,
} from 'react-native'

import checkIcon from '../../assets/images/icons/check.png'

import styles from './styles'

interface CheckBoxProps {
    onPress(): any
}

const CheckBox: React.FC<CheckBoxProps> = ({ onPress }) => {

    const [isChecked, setIsChecked] = useState(false)

    function onPressHandler() {
        setIsChecked(!isChecked)
        onPress()
    }

    return (
        <TouchableWithoutFeedback onPress={onPressHandler}>
            <View style={[
                {
                    backgroundColor: isChecked ? "#04D361" : "#fff"
                },
                styles.container
            ]}>
                <Image
                    style={[
                        {
                            display: isChecked ? "flex" : "none"
                        },
                        styles.checkImage
                    ]}
                    source={checkIcon}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CheckBox
