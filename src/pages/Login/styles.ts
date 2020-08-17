import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import LoginTextInput from '../../components/LoginTextInput'

const windowHeight = Dimensions.get('window').height;

export const ContainerKeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`

export const ImageBackground = styled.ImageBackground`
    flex: 1;
`

export const LogoView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const LogoText = styled.Text`
    color: #fff;
    font-size: 14px;
`

export const LoginView = styled.View`
    height: ${windowHeight / 2};
    min-width: 300px;
    background: #F0F0F7;
    justify-content: space-between;
    padding: 20px 25px;
`

export const LoginHeaderView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LoginText = styled.Text`
    color: #32264D;
    font-family: Poppins_400Regular;
    font-weight: bold;
    font-size: 28px;
`

export const CreateAccountText = styled.Text`
    color: #9871F5;
    font-family: Poppins_400Regular;
`

export const InputsView = styled.View`
    margin-top: 20px;
`

export const EmailInput = styled(LoginTextInput)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-width: 0;
`

export const PasswordInput = styled(LoginTextInput)`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const PasswordManagerView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:  20px;
`

export const RemindMeView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RemindMeText = styled.Text`
    margin-left: 15px;
    font-size: 13px;
    color: #9C98A6;
    font-family: Poppins_400Regular;
`

export const ForgetText = styled.Text`
    font-size: 13px;
    color: #9C98A6;
    font-family: Poppins_400Regular;
`
