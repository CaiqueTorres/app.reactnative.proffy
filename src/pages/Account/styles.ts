import { SafeAreaView } from 'react-native-safe-area-context'

import TextInput from '../../components/atoms/TextInput'
import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    align-items: center;
    background: #f0f0f7;
`

export const ContainerScrollView = styled.ScrollView`
    width: 100%;
`

export const DetailsView = styled.View`
    height: 450px;
    width: 100%;
    padding: 50px 40px 0 40px;
    background: #8257e5;
`

export const DetailsImageBackground = styled.ImageBackground`
    justify-content: center;
    align-items: center;
    height: 294px;
    width: 100%;
`

export const DetailsTitleText = styled.Text`
    color: #fff;
    font-family: Archivo_400Regular;
    font-size: 24px;
    margin-top: 20px;
    line-height: 32px;
`

export const DetailsSubtitleText = styled.Text`
    color: #d4c2ff;
    font-family: Poppins_400Regular;
    font-size: 16px;
    line-height: 32px;
`

export const UserDataView = styled.View`
    background: #fff;
    padding: 20px 30px;
    width: 95%;
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
