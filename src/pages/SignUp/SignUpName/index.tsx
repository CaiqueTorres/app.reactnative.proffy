import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
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
import { RootStackParamList } from '../../../routes/AppStack';

export type DefaultSignUpNameProps = StackScreenProps<
    RootStackParamList,
    'SignUpName'
>

export default function SignUpName({ navigation }: DefaultSignUpNameProps) {
    const { navigate } = useNavigation()

    function handleNavigateToLoginPage() {
        navigate('Login')
    }

    function handleNavigateToSignUpEmail() {
        navigate('SignUpEmail')
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

                <Button
                    enabled
                    textEnabled="Próximo"
                    textDisabled="Próximo"
                    backgroundColorEnabled="#8257E5"
                    backgroundColorDisabled="#DCDCE5"
                    textColorEnable="#FFF"
                    textColorDisabled="#9C98A6"
                    onPress={handleNavigateToSignUpEmail}
                />
            </SafeAreaView>
        </ContainerKeyboardAvoidingView>
    )
}
