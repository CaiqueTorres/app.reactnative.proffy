import React, { useState, useRef } from 'react'
import {
    TextInputFocusEventData,
    NativeSyntheticEvent,
    Animated,
    TouchableWithoutFeedback,
    ViewStyle,
    StyleProp
} from 'react-native'
import { TextInputProps } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import {
    ContainerView,
    ContainerTextInput,
    NonInteractableView,
    LineView,
    PlaceholderText
} from './styles'

import { isTextEmpty } from '../../../utils/validationFunctions'

/**
 * The authentication text input props
 */
export interface AuthenticationTextInputProps extends TextInputProps {
    readonly duration?: number
    readonly colorTheme?: string
    readonly style?: StyleProp<ViewStyle>
}

/**
 * The authentication text input
 *
 * It component will be used in login, signup and forgot password screens
 */
const AuthenticationTextInput: React.FC<AuthenticationTextInputProps> = ({
    secureTextEntry,
    duration = 200,
    onFocus,
    onBlur,
    onChangeText,
    colorTheme,
    placeholder,
    style,
    ...rest
}: AuthenticationTextInputProps): JSX.Element => {
    const [text, setText] = useState('')
    const [selected, setSelected] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)

    const animatedLineOpacity = useRef(new Animated.Value(0)).current
    const animatedPlaceholderPosition = useRef(new Animated.Value(20)).current
    const animatedPlaceholderTextSize = useRef(new Animated.Value(14)).current

    //#region Functions

    /**
     * Function that will be called when the user focus the text input
     * @param e stores the click event data
     */
    function handleOnFocus(
        e: NativeSyntheticEvent<TextInputFocusEventData>
    ): void {
        animate(true)
        setSelected(true)
        if (onFocus) onFocus(e)
    }

    /**
     * Function that will be called when the user blur the text input
     * @param e stores the click event data
     */
    function handleOnBlur(
        e: NativeSyntheticEvent<TextInputFocusEventData>
    ): void {
        animate(false)
        setSelected(false)
        if (onBlur) onBlur(e)
    }

    /**
     * Function that will be called when the user change the text input value
     * @param value stores the new text data
     */
    function handleOnChangeText(value: string): void {
        setText(value)
        if (onChangeText) onChangeText(value)
    }

    //#endregion

    //#region Animations

    /**
     * Function that is called when the user focus or blur the text input,
     *  calling the respective animation when it happens
     * @param value stores the current text input animation state;
     *
     * if true the user focus the text input and the animation will be called to
     * allow the user changing the value
     *
     * if false the user blur the text input and the animation will be called to
     * block the user changing the value
     */
    function animate(value: boolean): void {
        if (!isTextEmpty(text)) return

        if (value) {
            Animated.parallel([
                Animated.timing(animatedPlaceholderPosition, {
                    toValue: 5,
                    duration,
                    useNativeDriver: false
                }),
                Animated.timing(animatedPlaceholderTextSize, {
                    toValue: 11,
                    duration,
                    useNativeDriver: false
                }),
                Animated.timing(animatedLineOpacity, {
                    toValue: 1,
                    duration,
                    useNativeDriver: false
                })
            ]).start()
            return
        }
        Animated.parallel([
            Animated.timing(animatedPlaceholderPosition, {
                toValue: 20,
                duration,
                useNativeDriver: false
            }),
            Animated.timing(animatedPlaceholderTextSize, {
                toValue: 14,
                duration,
                useNativeDriver: false
            }),
            Animated.timing(animatedLineOpacity, {
                toValue: 0,
                duration,
                useNativeDriver: false
            })
        ]).start()
    }

    //#endregion

    return (
        //#region JSX

        <ContainerView style={style}>
            <ContainerTextInput
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChangeText={handleOnChangeText}
                secureTextEntry={secureTextEntry && !passwordVisible}
                extraPadding={secureTextEntry ? 65 : 25}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...(rest as any)}
            />
            <NonInteractableView pointerEvents="none">
                <PlaceholderText
                    style={{
                        top: animatedPlaceholderPosition,
                        fontSize: animatedPlaceholderTextSize
                    }}
                >
                    {placeholder}
                </PlaceholderText>
                <LineView
                    style={{
                        opacity: animatedLineOpacity,
                        borderLeftColor: colorTheme
                    }}
                />
            </NonInteractableView>
            {secureTextEntry && (
                <TouchableWithoutFeedback
                    onPress={() => {
                        setPasswordVisible(!passwordVisible)
                    }}
                >
                    <Ionicons
                        style={{
                            position: 'absolute',
                            right: 25
                        }}
                        name={passwordVisible ? 'md-eye' : 'md-eye-off'}
                        size={26}
                        color={selected ? colorTheme : '#9C98A6'}
                    />
                </TouchableWithoutFeedback>
            )}
        </ContainerView>

        //#endregion
    )
}

AuthenticationTextInput.displayName = 'AuthenticationTextInput'

export default AuthenticationTextInput
