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
} from './styles'

import Button from '../../../components/Button';
import PageNumber from '../../../components/PageNumber'

export default function SignUpEmail() {
    const { navigate } = useNavigation()

    function handleNavigateToLoginPage() {
        navigate('SignUpName')
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
                    <PageNumber
                        pagesAmount={2}
                        pageNumberSelected={0}
                    />
                </HeaderView>

                <InfoView>
                    <TitleText>Crie a sua conta gratuíta</TitleText>
                    <SubtitleText>Basta preencher esses dados e você estará conosco.</SubtitleText>
                </InfoView>

                <InputsView>
                    <InputTitleText>02. Email e Senha</InputTitleText>
                    <NameInputText
                        placeholder="E-mail"
                        transition={150}
                    />
                    <LastNameInputText
                        isPassword
                        placeholder="Password"
                        transition={150}
                    />
                </InputsView>

                <Button
                    enabled
                    textEnabled="Concluir cadastro"
                    textDisabled="Concluir cadastro"
                    backgroundColorEnabled="#04D361"
                    backgroundColorDisabled="#DCDCE5"
                    textColorEnable="#FFF"
                    textColorDisabled="#9C98A6"
                />
            </SafeAreaView>
        </ContainerKeyboardAvoidingView>
    )
}
