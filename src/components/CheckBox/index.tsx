import React, { useState } from 'react'
import {
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProperties,
} from 'react-native'

import checkIcon from '../../assets/images/icons/check.png'

import styles from './styles'

interface CheckBoxProps extends TouchableWithoutFeedbackProperties {
    onClick(): any
}

const CheckBox: React.FC<CheckBoxProps> = ({ onClick, ...rest }) => {

    const [isChecked, setIsChecked] = useState(false)

    function onClickHandler() {
        setIsChecked(!isChecked)
        onClick()
    }

    return (
        <TouchableWithoutFeedback
            onPress={onClickHandler}
            {...rest}
        >
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
                    source={checkIcon} /
                >
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CheckBox
