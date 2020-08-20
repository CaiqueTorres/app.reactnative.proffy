import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../../../routes/AppStack';
import Button from '../../../components/Button';
import PageNumber from '../../../components/PageNumber'

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

export type DefaultSignUpEmailProps = StackScreenProps<
    RootStackParamList,
    'SignUpEmail'
>

export default function SignUpEmail({ navigation }: DefaultSignUpEmailProps) {
    return (
        <ContainerKeyboardAvoidingView>
            <SafeAreaView>
                <HeaderView>
                    <AntDesign
                        name="arrowleft"
                        size={24}
                        color="#9C98A6"
                        onPress={() => { navigation.pop() }}
                    />
                    <PageNumber
                        pagesAmount={2}
                        pageNumberSelected={1}
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
                    onPress={() => { navigation.navigate("SignUpComplete") }}
                />
            </SafeAreaView>
        </ContainerKeyboardAvoidingView>
    )
}
