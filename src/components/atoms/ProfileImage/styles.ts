import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export const ContainerView = styled.View`
    flex: 1;
`

export const ImageView = styled.View`
    background: #f0f0f7;
    width: ${(props: { size: number }) => props.size}px;
    height: ${(props: { size: number }) => props.size}px;
    border-radius: ${(props: { size: number }) => props.size / 2}px;
    justify-content: center;
    align-items: center;
`

export const ProfileImage = styled.Image`
    width: ${(props: { size: number }) => props.size}px;
    height: ${(props: { size: number }) => props.size}px;
    border-radius: ${(props: { size: number }) => props.size / 2}px;
`

export const CameraRectButton = styled(RectButton)`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    justify-content: center;
    align-items: center;
    background: #04d361;
`
