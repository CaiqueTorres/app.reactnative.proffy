import styled from 'styled-components/native'

import LoginTextInput from '../../../components/LoginTextInput';

export const ContainerKeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
    padding: 50px 20px;
    justify-content: space-between;
`

export const SafeAreaView = styled.View`
    flex: 1;
    background: #F0F0F7;
    justify-content: space-between;
`

export const HeaderView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const InfoView = styled.View`
    width: 250px;
`

export const TitleText = styled.Text`
    color: #32264D;
    font-family: Poppins_600SemiBold;
    font-weight: bold;
    font-size: 33px;
`

export const SubtitleText = styled.Text`
    color: #6A6180;
    font-family: Poppins_400Regular;
    margin-top: 15px;
`

export const InputsView = styled.View`
    margin: 20px 0;
`

export const NameInputText = styled(LoginTextInput)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const LastNameInputText = styled(LoginTextInput)`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const InputTitleText = styled.Text`
    color: #32264D;
    font-family: Poppins_400Regular;
    font-size: 30px;
    margin-bottom: 20px;
`
