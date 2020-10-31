import React from 'react'
import { Image, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

import { StatusBar } from 'expo-status-bar'

import {
    ContainerSafeAreaView,
    LogoView,
    HeaderView,
    ProfileView,
    ProfilePhotoImage,
    ProfileUsernameText,
    LogoutRectButton,
    LandingImage,
    ContentView,
    TitleText,
    SubtitleText,
    ButtonsView,
    FooterView,
    FooterText
} from './styles'

import landingImage from '../../assets/images/landing.png'
import giveClassesIcon from '../../assets/images/onboarding/give-classes.png'
import studyIcon from '../../assets/images/onboarding/study.png'
import profileImage from '../../assets/images/profile.jpg'
import LandingButton from './LandingButton'

const LandingPage: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <ContainerSafeAreaView>
            <StatusBar translucent style="light" />
            <LogoView>
                <HeaderView>
                    <ProfileView>
                        <ProfilePhotoImage source={profileImage} />
                        <ProfileUsernameText>Caique Torres</ProfileUsernameText>
                    </ProfileView>
                    <LogoutRectButton>
                        <Feather name="power" size={24} color="#d4c2ff" />
                    </LogoutRectButton>
                </HeaderView>
                <LandingImage source={landingImage} />
            </LogoView>
            <ContentView>
                <View>
                    <TitleText>Seja bem-vindo.</TitleText>
                    <SubtitleText>O que deseja fazer?</SubtitleText>
                </View>
                <ButtonsView>
                    <LandingButton
                        title="Estudar"
                        style={{
                            flex: 1,
                            backgroundColor: '#8257E5',
                            marginRight: 10,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={studyIcon}
                            style={{
                                width: 60,
                                height: 60
                            }}
                        />
                    </LandingButton>
                    <LandingButton
                        title="Dar aulas"
                        style={{
                            flex: 1,
                            backgroundColor: '#04D361',
                            marginLeft: 10,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={giveClassesIcon}
                            style={{
                                width: 60,
                                height: 60
                            }}
                        />
                    </LandingButton>
                </ButtonsView>
                <FooterView>
                    <FooterText>Total de 285 conexões já realizadas</FooterText>
                    <AntDesign name="heart" size={17} color="#B9A4EE" />
                </FooterView>
            </ContentView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

LandingPage.displayName = 'LandingPage'

export default LandingPage
