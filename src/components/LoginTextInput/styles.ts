import styled from 'styled-components/native'
import { Animated } from 'react-native'

import AnimatedTextInput from './AnimatedTextInput'

const inputHeight = 65

export const ContainerView = styled.View`
    padding: 0 25px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${inputHeight};
    border: 1px solid #E6E6F0;
    background: #fff;
`

export const TextInputContentView = styled.View`
    flex: 1;
    justify-content: center;
`

export const InputTextAnimated = styled(AnimatedTextInput)`
    height: ${inputHeight};
`

export const PurpleLineView = styled.View`
    height: 65%;
    width: 100%;
    position: absolute;
    transform: translateX(-25px);
    border-left-width: 3px;
    border-left-color: #8257E5;
`

export const PlaceHolderView = styled.View`
    flex: 1;
    position: absolute;
`

export const PlaceHolderText = styled(Animated.Text)`
    color: #C1BCCC;
    font-size: 14px;
`
