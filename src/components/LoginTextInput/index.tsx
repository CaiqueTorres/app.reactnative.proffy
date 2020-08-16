import React from 'react';
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

interface LoginTextInputState {
    isFocused: boolean
    secureTextEntry: boolean
    inputText: string
    translateYAnimation: Animated.Value
    fontSizeAnimation: Animated.Value
    translateYTextInputAnimation: Animated.Value
}

export default class LoginTextInput extends
    React.Component<LoginTextInputsProps, LoginTextInputState> {

    constructor(props: LoginTextInputsProps) {
        super(props)

        this.state = {
            isFocused: false,
            secureTextEntry: true,
            inputText: '',
            translateYAnimation: new Animated.Value(0),
            fontSizeAnimation: new Animated.Value(14),
            translateYTextInputAnimation: new Animated.Value(0)
        }

        this.handlerOnFocused = this.handlerOnFocused.bind(this)
        this.handlerOnBlurred = this.handlerOnBlurred.bind(this)
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

        console.log(this.state.inputText)
        if (!validateText(this.state.inputText))
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

    render() {
        return (
            //#region JSX

            <ContainerView style={this.props.style}>
                <TextInputContentView>
                    <InputTextAnimated
                        style={{ transform: [{ translateY: this.state.translateYTextInputAnimation }] }}
                        onFocus={this.handlerOnFocused}
                        onBlur={this.handlerOnBlurred}
                        onChangeText={(text: string) => this.setState({ inputText: text })}
                        secureTextEntry={this.props.isPassword && this.state.secureTextEntry}
                    />
                    {this.state.isFocused && <PurpleLineView pointerEvents="none" />}
                    <PlaceHolderView
                        pointerEvents="none"
                    >
                        <PlaceHolderText
                            style={
                                {
                                    fontSize: this.state.fontSizeAnimation,
                                    transform: [{ translateY: this.state.translateYAnimation }]
                                }
                            }
                        >{this.props.placeholder}
                        </PlaceHolderText>
                    </PlaceHolderView>
                </TextInputContentView>

                {this.props.isPassword && (
                    <Ionicons
                        onPress={() => { this.setState({ secureTextEntry: !this.state.secureTextEntry }) }}
                        name={this.state.secureTextEntry ? "md-eye-off" : "md-eye"}
                        size={24}
                        color="#8257E5"
                    />
                )}
            </ContainerView>

            //#endregion
        )
    }
}
