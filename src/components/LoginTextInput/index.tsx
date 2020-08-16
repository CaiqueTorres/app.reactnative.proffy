import React, { useState } from 'react';
import {
    Animated,
    TextInputProperties,
    StyleProp,
    ViewStyle
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import validateText from '../../utils/validateText';

import {
    ContainerView,
    TextInputContentView,
    InputTextAnimated,
    PurpleLineView,
    PlaceHolderView,
    PlaceHolderText
} from './styles'

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

    const [secureTextEntry, setSecureTextEntry] = useState(true)
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

    //#endregion

    return (
        //#region JSX

        <ContainerView style={style}>
            <TextInputContentView>
                <InputTextAnimated
                    style={{ transform: [{ translateY: translateYTextInputAnimation }] }}
                    onFocus={handlerOnFocused}
                    onBlur={handlerOnBlurred}
                    onChangeText={setInputText}
                    secureTextEntry={isPassword && secureTextEntry}
                />
                {isFocused && <PurpleLineView pointerEvents="none" />}
                <PlaceHolderView
                    pointerEvents="none"
                >
                    <PlaceHolderText style={
                        {
                            fontSize: fontSizeAnimation,
                            transform: [{ translateY: translateYAnimation }]
                        }
                    }>{placeholder}</PlaceHolderText>
                </PlaceHolderView>
            </TextInputContentView>

            {isPassword && (
                <Ionicons
                    onPress={() => { setSecureTextEntry(!secureTextEntry) }}
                    name={secureTextEntry ? "md-eye-off" : "md-eye"}
                    size={24}
                    color="#8257E5"
                />
            )}
        </ContainerView>

        //#endregion
    )
}

export default LoginTextInput;
