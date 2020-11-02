import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StatusBar } from 'expo-status-bar'

import { AppStackParamsList } from '../../routes/AppStack'

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
    LandingButtonIconImage,
    FooterView,
    FooterText
} from './styles'

import landingImage from '../../assets/images/landing.png'
import giveClassesIcon from '../../assets/images/onboarding/give-classes.png'
import studyIcon from '../../assets/images/onboarding/study.png'
import profileImage from '../../assets/images/profile.jpg'
import LandingButton from './LandingButton'

/**
 * Tha app's landing page
 */
const LandingPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'LandingPage'>
    >()

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <StatusBar translucent style="light" />
            <LogoView>
                <HeaderView>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            navigation.push('AccountPage')
                        }}
                    >
                        <ProfileView>
                            <ProfilePhotoImage source={profileImage} />
                            <ProfileUsernameText>
                                Caique Torres
                            </ProfileUsernameText>
                        </ProfileView>
                    </TouchableWithoutFeedback>
                    <LogoutRectButton
                        onPress={() => {
                            navigation.replace('LoginPage')
                        }}
                    >
                        <Feather name="power" size={22} color="#d4c2ff" />
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
                        <LandingButtonIconImage source={studyIcon} />
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
                        <LandingButtonIconImage source={giveClassesIcon} />
                    </LandingButton>
                </ButtonsView>
                <FooterView>
                    <FooterText>Total de 285 conexões já realizadas</FooterText>
                    <AntDesign
                        name="heart"
                        size={17}
                        color="#B9A4EE"
                        style={{
                            position: 'absolute',
                            bottom: 4,
                            left: 95
                        }}
                    />
                </FooterView>
            </ContentView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

LandingPage.displayName = 'LandingPage'

export default LandingPage
