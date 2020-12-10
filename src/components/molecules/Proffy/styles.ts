import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export const ContainerView = styled.View`
    width: 100%;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e6e6f0;
`

export const HeaderView = styled.View`
    padding: 20px;
`

export const ProfileView = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
`

export const ProfileImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-right: 20px;
`

export const ProfileNameText = styled.Text`
    font-family: Archivo_600SemiBold;
    color: #32264c;
    font-size: 20px;
`

export const ProfileSubjectText = styled.Text`
    font-family: Poppins_400Regular;
    color: #6a6180;
    font-size: 12px;
`

export const ProfileDescriptionText = styled.Text`
    font-family: Poppins_400Regular;
    color: #6a6180;
    font-size: 14px;
`

export const FooterView = styled.View`
    background: #fafafc;
    padding: 20px;
    border-top-width: 1px;
    border-top-color: #e6e6f0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const PriceView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const PriceTitleText = styled.Text`
    font-family: Poppins_400Regular;
    color: #6a6180;
    font-size: 12px;
`

export const PriceValueText = styled.Text`
    font-size: 16px;
    color: #8257e5;
    font-family: Archivo_600SemiBold;
`

export const ButtonsView = styled.View`
    flex-direction: row;
    margin-top: 20px;
`

export const WhiteCircleView = styled.View`
    position: absolute;
    left: 4px;
    top: 4px;
    background: #fff;
    border-radius: 12px;
    width: 21px;
    height: 21px;
`

export const ContactRectButton = styled(RectButton)`
    flex: 1;
    background: #04d361;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ContactRectButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-family: Archivo_600SemiBold;
    margin-left: 14px;
`
