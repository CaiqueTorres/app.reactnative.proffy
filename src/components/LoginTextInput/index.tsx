import React from 'react';
import { View, TextInputProperties } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

import Svg, { Line } from 'react-native-svg'

import styles from './styles'

interface LoginTextInputsProps extends TextInputProperties {

}

const LoginTextInput: React.FC<LoginTextInputsProps> = ({ ...rest }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                {...rest}
            />
            <View style={styles.purpleLine} />
        </View>
    )
}

export default LoginTextInput;
