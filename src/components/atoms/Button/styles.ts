import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const ContainerRectButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: ${(props: { backgroundColor: string }) =>
        props.backgroundColor};
    border-radius: 9px;
`

export const ContainerText = styled.Text`
    color: ${(props: { color: string }) => props.color};
    font-family: Archivo_400Regular;
    font-size: 17px;
`
