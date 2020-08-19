import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

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

export default function SignUpComplete() {
    const { navigate } = useNavigation()

    function handleNavigateToLoginPage() {
        navigate("Login")
    }

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
                        onPress={handleNavigateToLoginPage}
                    />
                </SafeArea>
            </BackgroundImage>
        </Container>
    )
}
