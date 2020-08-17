import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import {
    ContainerKeyboardAvoidingView,
    HeaderView,
    InfoView,
    InputsView
} from './styles'

import PageNumber from '../../../components/PageNumber'
import LoginTextInput from '../../../components/LoginTextInput';

export default function SignUpName() {
    const { navigate } = useNavigation()

    return (
        <ContainerKeyboardAvoidingView>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "#F0F0F7",
                justifyContent: "space-between"
            }}>
                <HeaderView>
                    <AntDesign
                        name="arrowleft"
                        size={24}
                        color="#9C98A6"
                    />
                    <PageNumber />
                </HeaderView>

                <InfoView>
                    <Text>Crie a sua conta gratuíta</Text>
                    <Text>Basta preencher esses dados e você estará conosco.</Text>
                </InfoView>

                <InputsView>
                    <Text>01. Quem é você?</Text>
                    <LoginTextInput
                        placeholder="Nome"
                        transition={150}
                    />
                    <LoginTextInput
                        placeholder="Sobrenome"
                        transition={150}
                    />
                </InputsView>

                <RectButton>
                    <Text>Próximo</Text>
                </RectButton>
            </SafeAreaView>
        </ContainerKeyboardAvoidingView>
    )
}
