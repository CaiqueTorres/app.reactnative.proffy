import { SafeAreaView } from 'react-native-safe-area-context'

import TextInput from '../../components/atoms/TextInput'
import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
`

export const DetailsView = styled.View`
    height: 243px;
    width: 100%;
    padding: 28px 40px;
    background: #8257e5;
`

export const DetailsTitleText = styled.Text`
    margin-bottom: 15px;
    color: #fff;
    font-size: 24px;
    font-family: Archivo_400Regular;
`

export const DetailsDescriptionText = styled.Text`
    color: #d4c2ff;
    font-size: 14px;
    font-family: Poppins_400Regular;
`

export const UserDataView = styled.View`
    background: #fff;
    padding: 20px 30px;
    width: 90%;
    align-self: center;
    border-radius: 10px;
    border: 2px solid #e6e6f0;
    transform: translateY(-60px);
    margin-bottom: 40px;
`

export const UserDataTitleText = styled.Text`
    color: #32264d;
    font-family: Archivo_400Regular;
    font-size: 20px;
    border-bottom-width: 2px;
    border-bottom-color: #e6e6f0;
    line-height: 50px;
    margin-bottom: 20px;
`

export const UserDataTextInput = styled(TextInput)`
    border-radius: 8px;
    background: #fafafc;
    max-height: 800px;
    min-height: 65px;
`
