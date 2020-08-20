import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import { RootStackParamList } from '../../../routes/AppStack';
import Button from '../../../components/Button'

import backgroundImage from '../../../assets/images/give-classes-background.png'

import {
    Container,
    SafeArea,
    BackgroundImage,
    SignUpConfimedView,
    TitleText,
    SubtitleText
} from './styles'

export type DefaultSignUpCompleteProps = StackScreenProps<
    RootStackParamList,
    "SignUpComplete"
>

export default function SignUpComplete({ navigation }: DefaultSignUpCompleteProps) {
    return (
        <Container>
            <BackgroundImage source={backgroundImage}>
                <SafeArea>
                    <SignUpConfimedView>
                        <Feather
                            name="check-square"
                            size={125}
                            color="#04D361"
                        />
                        <TitleText>Cadastro concluído!</TitleText>
                        <SubtitleText>Agora você faz parte da plataforma Proffy</SubtitleText>
                    </SignUpConfimedView>
                    <Button
                        enabled
                        textEnabled="Fazer login"
                        backgroundColorEnabled="#04D361"
                        textColorEnable="#FFF"
                        onPress={() => { navigation.popToTop() }}
                    />
                </SafeArea>
            </BackgroundImage>
        </Container>
    )
}
