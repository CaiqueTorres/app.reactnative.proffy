import { Picker } from '@react-native-community/picker'

import styled from 'styled-components/native'

export const ContainerView = styled.View``

export const TitleText = styled.Text`
    color: #9c98a6;
    font-family: Poppins_400Regular;
    font-size: 12px;
`

export const PickerView = styled.View`
    background: #fafafc;
    border: 1px solid #e6e6f0;
    color: #6a6180;
    font-family: Poppins_400Regular;
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 8px;
`

export const ContainerPicker = styled(Picker)`
    color: #6a6180;
    font-family: Poppins_400Regular;
    font-size: 14px;
`
