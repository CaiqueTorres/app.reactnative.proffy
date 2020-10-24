import { Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    height: ${Dimensions.get('screen').height}px;
    justify-content: center;
    align-items: center;
    background: #8257e5;
`

export const IconView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 40px;
`

export const IconBackgroundImage = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const LogoImage = styled.Image`
    width: 230px;
    height: 68px;
`

export const LogoSubtitleText = styled.Text`
    color: #d4c2ff;
    font-size: 25px;
    width: 210px;
    font-family: Archivo_400Regular;
`

export const LoginView = styled.View`
    height: 460px;
    width: 100%;
    background: #f0f0f7;
    justify-content: space-between;
    padding: 50px 30px;
`

export const LoginHeaderView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LoginHeaderTitleText = styled.Text`
    color: #32264c;
    font-family: Poppins_600SemiBold;
    font-size: 24px;
`

export const LoginHeaderCreateAccountText = styled.Text`
    color: #8257e5;
    font-family: Poppins_400Regular;
    font-size: 12px;
`

export const PasswordStoreView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const PasswordStoreText = styled.Text`
    font-size: 12px;
    font-family: Poppins_400Regular;
    color: #9c98a6;
`
