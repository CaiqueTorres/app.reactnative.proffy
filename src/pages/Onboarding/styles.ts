import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

export const ContainerView = styled.View`
    flex: 1;
`

export const SwiperPageContainerView = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${(props: { backgroundColor: string }) =>
        props.backgroundColor};
    padding: 0;
`

export const IconView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const IconImageBackground = styled.Image`
    position: absolute;
    width: 75%;
    height: 75%;
`

export const IconImage = styled.Image`
    width: 120px;
    height: 120px;
`

export const ContentView = styled.View`
    width: 100%;
    height: 450px;
    background: #f0f0f7;
    justify-content: center;
    padding: 0 40px 70px 40px;
`

export const TitleText = styled.Text`
    color: #dbd9e4;
    font-family: Archivo_400Regular;
    font-size: 40px;
    margin-bottom: 15px;
`

export const SubtitleText = styled.Text`
    color: #6a6180;
    font-family: Poppins_400Regular;
    font-size: 24px;
    width: 70%;
`
