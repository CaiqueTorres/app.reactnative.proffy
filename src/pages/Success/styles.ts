import { Archivo_700Bold_Italic } from '@expo-google-fonts/archivo'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

import styled from 'styled-components/native'

export const ContainerView = styled.View`
    flex: 1;
    background: #8257e5;
    justify-content: space-between;
    padding: 0 25px 50px 25px;
`

export const SuccessImage = styled.Image``

export const TitleView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const BackgroundImage = styled.Image`
    position: absolute;
`

export const TitleText = styled.Text`
    width: 200px;
    color: #fff;
    font-size: 32px;
    font-family: Archivo_400Regular;
    text-align: center;
`

export const SubtitleText = styled.Text`
    width: 200px;
    color: #d4c2ff;
    font-size: 14px;
    font-family: Poppins_400Regular;
    text-align: center;
`
