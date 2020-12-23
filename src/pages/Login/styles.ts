import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #8257e5;
`

export const IconView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const IconBackgroundImage = styled.Image`
    position: absolute;
    width: 75%;
    height: 75%;
`

export const LogoImage = styled.Image`
    width: ${hp('25%')}px;
    height: ${hp('7.2%')}px;
`

export const LogoSubtitleText = styled.Text`
    color: #d4c2ff;
    font-size: ${hp('2.4%')}px;
    width: ${hp('22%')}px;
    font-family: Archivo_400Regular;
`

export const LoginView = styled.View`
    height: 430px;
    width: 100%;
    background: #f0f0f7;
    justify-content: space-between;
    padding: ${hp('4%')}px ${wp('7%')}px;
`

export const LoginHeaderView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LoginHeaderTitleText = styled.Text`
    color: #32264c;
    font-family: Poppins_600SemiBold;
    font-size: ${wp('6.8%')}px;
`

export const LoginHeaderCreateAccountText = styled.Text`
    color: #8257e5;
    font-family: Poppins_400Regular;
    font-size: ${wp('3.5%')}px;
`

export const PasswordStoreView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const PasswordStoreText = styled.Text`
    font-size: ${wp('3.5%')}px;
    font-family: Poppins_400Regular;
    color: #9c98a6;
`
