import React, { useState } from 'react';
import {
    Animated,
    View,
    TextInputProperties,
    StyleProp,
    ViewStyle,
    TouchableWithoutFeedback
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import AnimatedTextInput from './AnimatedTextInput'

import styles from './styles'

interface LoginTextInputsProps extends TextInputProperties {
    style?: StyleProp<ViewStyle>
    transition: number
    placeholder?: string
    isPassword?: boolean
}

const LoginTextInput: React.FC<LoginTextInputsProps> = ({
    style,
    transition,
    placeholder,
    isPassword,
}) => {

    const [secureTextEntry, setSecureTextEntry] = useState(false)
    const [inputText, setInputText] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    const translateYAnimation = useState(new Animated.Value(0))[0]
    const fontSizeAnimation = useState(new Animated.Value(14))[0]
    const translateYTextInputAnimation = useState(new Animated.Value(0))[0]

    //#region Handlers

    function handlerOnFocused() {
        setIsFocused(true)

        Animated.parallel([
            Animated.timing(
                fontSizeAnimation,
                {
                    toValue: 11,
                    duration: transition,
                    useNativeDriver: false
                }),

            Animated.timing(
                translateYAnimation,
                {
                    toValue: -11,
                    duration: transition,
                    useNativeDriver: false
                }),

            Animated.timing(
                translateYTextInputAnimation,
                {
                    toValue: 11,
                    duration: transition,
                    useNativeDriver: false
                }),
        ]).start()
    }

    function handlerOnBlurred() {
        setIsFocused(false)

        if (!validateText(inputText))
            return

        Animated.parallel([
            Animated.timing(
                translateYAnimation,
                {
                    toValue: 0,
                    duration: transition,
                    useNativeDriver: false
                }),

            Animated.timing(
                fontSizeAnimation,
                {
                    toValue: 14,
                    duration: transition,
                    useNativeDriver: false
                }),

            Animated.timing(
                translateYTextInputAnimation,
                {
                    toValue: 0,
                    duration: transition,
                    useNativeDriver: false
                }),
        ]).start()
    }

    function validateText(text: string) {
        return inputText == '' || inputText == null
    }

    //#endregion

    return (
        //#region JSX

        <View style={[styles.container, style]}>
            <AnimatedTextInput
                style={[
                    styles.textInput,
                    {
                        transform: [{ translateY: translateYTextInputAnimation }]
                    }
                ]}
                onFocus={handlerOnFocused}
                onBlur={handlerOnBlurred}
                onChangeText={setInputText}
                secureTextEntry={secureTextEntry}
            />
            {isFocused && <View pointerEvents="none" style={styles.purpleLine} />}
            <View
                pointerEvents="none"
                style={styles.placeHolderBox}
            >
                <Animated.Text style={[
                    styles.placeHolderText,
                    {
                        fontSize: fontSizeAnimation,
                        transform: [{ translateY: translateYAnimation }]
                    }
                ]}>{placeholder}</Animated.Text>
            </View>

            {isPassword && (
                <Ionicons
                    onPress={() => { setSecureTextEntry(!secureTextEntry) }}
                    name={secureTextEntry ? "md-eye-off" : "md-eye"}
                    size={26}
                    color="black"
                />
            )}
        </View>

        //#endregion
    )
}

export default LoginTextInput;
