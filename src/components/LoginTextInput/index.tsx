import React, { useState } from 'react';
import { Animated, View, TextInputProperties, StyleProp, ViewStyle } from 'react-native'

import AnimatedTextInput from './AnimatedTextInput'

import styles from './styles'

interface LoginTextInputsProps extends TextInputProperties {
    style?: StyleProp<ViewStyle>
    transition: number
    placeholder?: string
}

interface LoginTextInputState {
    isFocused: boolean
    inputText: string
    translateYAnimation: Animated.Value
    fontSizeAnimation: Animated.Value
    translateYTextInputAnimation: Animated.Value
}

export default class LoginTextInput extends React.Component<LoginTextInputsProps, LoginTextInputState> {

    constructor(props: LoginTextInputsProps) {
        super(props)

        this.state = {
            isFocused: false,
            inputText: '',
            translateYAnimation: new Animated.Value(0),
            fontSizeAnimation: new Animated.Value(14),
            translateYTextInputAnimation: new Animated.Value(0)
        };

        this.handlerOnFocused = this.handlerOnFocused.bind(this)
        this.handlerOnBlurred = this.handlerOnBlurred.bind(this)
        this.validateText = this.validateText.bind(this)
    }

    handlerOnFocused() {
        this.setState({ isFocused: true })

        Animated.parallel([
            Animated.timing(
                this.state.fontSizeAnimation,
                {
                    toValue: 11,
                    duration: this.props.transition,
                    useNativeDriver: false
                }),

            Animated.timing(
                this.state.translateYAnimation,
                {
                    toValue: -11,
                    duration: this.props.transition,
                    useNativeDriver: false
                }),

            Animated.timing(
                this.state.translateYTextInputAnimation,
                {
                    toValue: 11,
                    duration: this.props.transition,
                    useNativeDriver: false
                }),
        ]).start()
    }

    handlerOnBlurred() {
        this.setState({ isFocused: false })

        if (!this.validateText(this.state.inputText))
            return

        Animated.parallel([
            Animated.timing(
                this.state.translateYAnimation,
                {
                    toValue: 0,
                    duration: this.props.transition,
                    useNativeDriver: false
                }),

            Animated.timing(
                this.state.fontSizeAnimation,
                {
                    toValue: 14,
                    duration: this.props.transition,
                    useNativeDriver: false
                }),

            Animated.timing(
                this.state.translateYTextInputAnimation,
                {
                    toValue: 0,
                    duration: this.props.transition,
                    useNativeDriver: false
                }),
        ]).start()
    }

    validateText(text: string) {
        return this.state.inputText == '' || this.state.inputText == null
    }

    render() {
        const {
            style,
            placeholder,
            transition,
            secureTextEntry
        } = this.props;

        return (
            //#region JSX

            <View style={[styles.container, style]}>
                <AnimatedTextInput
                    style={[
                        styles.textInput,
                        {
                            transform: [{ translateY: this.state.translateYTextInputAnimation }]
                        }
                    ]}
                    onFocus={this.handlerOnFocused}
                    onBlur={this.handlerOnBlurred}
                    onChangeText={(text: string) => this.setState({ inputText: text })}
                    secureTextEntry={secureTextEntry}
                />
                {this.state.isFocused && <View style={styles.purpleLine} pointerEvents="none" />}
                <View
                    pointerEvents="none"
                    style={styles.placeHolderBox}
                >
                    <Animated.Text style={[
                        styles.placeHolderText,
                        {
                            fontSize: this.state.fontSizeAnimation,
                            transform: [{ translateY: this.state.translateYAnimation }]
                        }
                    ]}>{placeholder}</Animated.Text>
                </View>
            </View>

            //#endregion
        )
    }
}
