import { Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    height: ${Dimensions.get('screen').height}px;
    justify-content: space-between;
    align-items: center;
    padding: 50px 30px;
`

export const TitleView = styled.View`
    margin-top: 150px;
    width: 100%;
`

export const TitleText = styled.Text`
    color: #32264d;
    font-family: Poppins_600SemiBold;
    font-size: 32px;
    margin-bottom: 13px;
`

export const SubtitleText = styled.Text`
    color: #6a6180;
    font-family: Poppins_400Regular;
    font-size: 14px;
`

export const FooterView = styled.View`
    width: 100%;
    justify-content: space-between;
`

export const FooterTitle = styled.Text`
    color: #32264d;
    font-family: Poppins_600SemiBold;
    font-size: 24px;
`

export const TextsInputView = styled.View`
    margin: 25px 0;
`
