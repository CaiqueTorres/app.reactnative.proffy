import React, { useContext, useEffect } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { getItemAsync } from 'expo-secure-store'
import * as SecureStore from 'expo-secure-store'
import { StatusBar } from 'expo-status-bar'

import * as SubjectService from '../../services/subjectService'

import useMe from '../../hooks/useMe'

import { LoadingScreenContext } from '../../contexts/loadingScreenContext'
import { useSubjects } from '../../contexts/subjectContext'

import { AppStackParamsList } from '../../navigations/appStack'

import {
    ContainerSafeAreaView,
    LogoView,
    HeaderView,
    ProfileView,
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

import UserImage from '../../components/atoms/UserImage'

import landingImage from '../../assets/landing/landing.png'
import giveClassesIcon from '../../assets/onboarding/give-classes.png'
import studyIcon from '../../assets/onboarding/study.png'

import LandingButton from './LandingButton'

/**
 * Tha app's landing page
 */
const LandingPage: React.FC = (): JSX.Element => {
    //#region Hooks

    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'LandingPage'>
    >()

    const { setEnabledLoading } = useContext(LoadingScreenContext)

    const user = useMe()
    const { setSubjects } = useSubjects()

    useEffect(() => {
        setSubjectsInRootState()
    }, [])

    //#endregion

    //#region Functions

    /**
     * Function that can set all the subjects that will be return of the api
     * in the redux state
     */
    async function setSubjectsInRootState(): Promise<void> {
        setEnabledLoading(true)
        try {
            const token = await getItemAsync('token')

            if (!token) throw new Error('The token is null!')

            const subjects = await SubjectService.getAllSubjectsAsArray(token)
            setSubjects(subjects)
        } catch (exception) {
            console.log(exception)
        } finally {
            setEnabledLoading(false)
        }
    }

    /**
     * Function that makes the navigation to the login page and clears the saved
     * token
     */
    async function navigateToLogin(): Promise<void> {
        await SecureStore.setItemAsync('token', '')
        navigation.replace('LoginPage')
    }

    //#endregion

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
                            <UserImage size={40} imageUri={user?.image} />
                            <ProfileUsernameText>
                                {`${user?.name} ${user?.lastName}`}
                            </ProfileUsernameText>
                        </ProfileView>
                    </TouchableWithoutFeedback>
                    <LogoutRectButton onPress={navigateToLogin}>
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
                        onPress={() => {
                            navigation.push('StudyNavigation')
                        }}
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
                        onPress={() => {
                            navigation.push('GiveClassesPage')
                        }}
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
