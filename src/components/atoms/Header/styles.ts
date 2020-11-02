import { Archivo_400Regular } from '@expo-google-fonts/archivo'

import styled from 'styled-components/native'

export const ContainerView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #774dd6;
    padding: 30px 20px;
    border-bottom-width: 2px;
    border-bottom-color: #6842c2;
`

export const BackButtonView = styled.View`
    width: 50px;
`

export const TitleText = styled.Text`
    color: #d4c2ff;
    font-family: Archivo_400Regular;
    font-size: 14px;
    text-align: center;
`

export const LogoImage = styled.Image`
    width: 50px;
    height: 15px;
`
