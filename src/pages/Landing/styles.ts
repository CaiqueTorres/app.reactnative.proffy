import { RectButton } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    background: #8257e5;
`

export const LogoView = styled.View`
    flex: 1;
    padding: 20px 30px;
    justify-content: space-around;
`

export const HeaderView = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const ProfileView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const ProfileUsernameText = styled.Text`
    margin-left: 15px;
    color: #d4c2ff;
    font-size: 12px;
    font-family: Poppins_400Regular;
`

export const LogoutRectButton = styled(RectButton)`
    background: #774dd6;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`

export const LandingImage = styled.Image`
    width: 100%;
`

export const ContentView = styled.View`
    flex: 1;
    background: #f0f0f7;
    justify-content: space-between;
    padding: 40px 30px;
`

export const TitleText = styled.Text`
    font-size: 20px;
    font-family: Poppins_400Regular;
    line-height: 25px;
`

export const SubtitleText = styled.Text`
    font-size: 22px;
    font-family: Poppins_700Bold;
    font-weight: bold;
    line-height: 25px;
`

export const ButtonsView = styled.View`
    height: 200px;
    flex-direction: row;
`

export const LandingButtonIconImage = styled.Image`
    width: 60px;
    height: 60px;
`

export const FooterView = styled.View`
    flex-direction: row;
    width: 170px;
`

export const FooterText = styled.Text`
    color: #9c98a6;
    font-family: Poppins_400Regular;
    font-size: 12px;
    margin-right: 10px;
    line-height: 21px;
`
