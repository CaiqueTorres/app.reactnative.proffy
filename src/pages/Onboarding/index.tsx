import React, { useRef, useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Swiper from 'react-native-swiper'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StatusBar } from 'expo-status-bar'

import { AppStackParamsList } from '../../routes/AppStack'

import {
    ContainerView,
    SwiperPageContainerView,
    IconView,
    IconImageBackground,
    IconImage,
    ContentView,
    TitleText,
    SubtitleText
} from './styles'

import giveClassesIcon from '../../assets/images/onboarding/give-classes.png'
import onboardingPageBackground01 from '../../assets/images/onboarding/onboarding-page-background-01.png'
import onboardingPageBackground02 from '../../assets/images/onboarding/onboarding-page-background-02.png'
import studyIcon from '../../assets/images/onboarding/study.png'

/**
 * The app onboarding page
 */
const OnboadingPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'OnboardingPage'>
    >()

    const swiper = useRef<Swiper>(null)

    const [index, setIndex] = useState(0)

    //#region Functions

    /**
     * A function that can change the current page in onboarding and even
     * navigate to the login page
     */
    function handleChangePageIndex(): void {
        if (index + 1 >= 2 || index + 1 < 0) navigation.replace('LoginPage')
        setIndex(index + 1)
        swiper.current?.scrollBy(index + 1)
    }

    //#endregion

    return (
        //#region JSX

        <ContainerView>
            <StatusBar translucent style="light" />
            <Swiper
                ref={swiper}
                key={2}
                loop={false}
                onIndexChanged={setIndex}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 3,
                    backgroundColor: '#C1BCCC'
                }}
                activeDotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 3,
                    backgroundColor: '#8257E5'
                }}
                paginationStyle={{
                    flex: 1,
                    paddingLeft: 40,
                    marginBottom: 30,
                    justifyContent: 'flex-start',
                    width: '100%'
                }}
            >
                <SwiperPageContainerView backgroundColor="#8257E5">
                    <IconView>
                        <IconImageBackground
                            source={onboardingPageBackground01}
                        />
                        <IconImage source={studyIcon} />
                    </IconView>
                    <ContentView>
                        <TitleText>01.</TitleText>
                        <SubtitleText>
                            Encontre vários professores para ensinar você
                        </SubtitleText>
                    </ContentView>
                </SwiperPageContainerView>
                <SwiperPageContainerView backgroundColor="#04D361">
                    <IconView>
                        <IconImageBackground
                            source={onboardingPageBackground02}
                        />
                        <IconImage source={giveClassesIcon} />
                    </IconView>
                    <ContentView>
                        <TitleText>02.</TitleText>
                        <SubtitleText>
                            Ou dê aulas sobre o que você mais conhece
                        </SubtitleText>
                    </ContentView>
                </SwiperPageContainerView>
            </Swiper>
            <TouchableWithoutFeedback onPress={handleChangePageIndex}>
                <AntDesign
                    style={{
                        position: 'absolute',
                        right: 40,
                        bottom: 50
                    }}
                    name="arrowright"
                    size={24}
                    color="#9C98A6"
                />
            </TouchableWithoutFeedback>
        </ContainerView>

        //#endregion
    )
}

OnboadingPage.displayName = 'OnboadingPage'

export default OnboadingPage
