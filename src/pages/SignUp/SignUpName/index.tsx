import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

import {
    ContainerKeyboardAvoidingView,
    SafeAreaView,
    HeaderView,
    InfoView,
    TitleText,
    SubtitleText,
    InputsView,
    NameInputText,
    LastNameInputText,
    InputTitleText,
    FooterRectButton,
    FooterRectButtonText
} from './styles'

import PageNumber from '../../../components/PageNumber'

export default function SignUpName() {
    const { navigate } = useNavigation()

    function handleNavigateToLoginPage() {
        navigate('Login')
    }

    return (
        <ContainerKeyboardAvoidingView>
            <SafeAreaView>
                <HeaderView>
                    <AntDesign
                        name="arrowleft"
                        size={24}
                        color="#9C98A6"
                        onPress={handleNavigateToLoginPage}
                    />
                    <PageNumber />
                </HeaderView>

                <InfoView>
                    <TitleText>Crie a sua conta gratuíta</TitleText>
                    <SubtitleText>Basta preencher esses dados e você estará conosco.</SubtitleText>
                </InfoView>

                <InputsView>
                    <InputTitleText>01. Quem é você?</InputTitleText>
                    <NameInputText
                        placeholder="Nome"
                        transition={150}
                    />
                    <LastNameInputText
                        placeholder="Sobrenome"
                        transition={150}
                    />
                </InputsView>

                <FooterRectButton>
                    <FooterRectButtonText>Próximo</FooterRectButtonText>
                </FooterRectButton>
            </SafeAreaView>
        </ContainerKeyboardAvoidingView>
    )
}
