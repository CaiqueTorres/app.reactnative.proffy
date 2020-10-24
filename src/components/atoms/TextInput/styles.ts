import { Animated } from 'react-native'

import styled from 'styled-components/native'

import AnimatedTextInput from '../AnimatedTextInput'

export const ContainerView = styled.View`
    justify-content: center;
`

export const ContainerTextInput = styled(AnimatedTextInput)`
    background: #fff;
    border-color: #e6e6f0;
    border-width: 2px;
    height: 65px;
    padding-left: 25px;
    color: #6a6180;
    font-family: Poppins_400Regular;
    font-size: 14px;
    padding-top: 17px;
    padding-right: ${(props: { extraPadding: number }) => props.extraPadding}px;
`

export const NonInteractableView = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
`

export const PlaceholderText = styled(Animated.Text)`
    position: absolute;
    left: 25px;
    color: #9c98a6;
    line-height: 24px;
    font-family: Poppins_400Regular;
`

export const LineView = styled(Animated.View)`
    position: absolute;
    width: 100%;
    bottom: 10px;
    top: 10px;
    align-self: center;
    border-left-width: 3px;
`
