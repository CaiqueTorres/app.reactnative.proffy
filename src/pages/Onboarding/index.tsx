import React from 'react'
import { Image, StatusBar } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper'

import {
    ContainerView,
    IconContainerView,
    IconContainerImageBackground
} from './styles'

import studyIcon from '../../assets/images/study.png'
import giveClassesIcon from '../../assets/images/give-classes.png'
import onboardingPageBackground01 from '../../assets/images/onboarding-page-background-01.png'
import onboardingPageBackground02 from '../../assets/images/onboarding-page-background-02.png'

/**
 * The onboarding page
 *
 * This component has the objective presents the app
 */
export default function OnboardingPage(): JSX.Element {
    return (
        //#region JSX

        <ContainerView>
            <Onboarding
                pageIndexCallback={(pageIndex: number) => {
                    StatusBar.setBarStyle('light-content')
                    StatusBar.setBackgroundColor(
                        pageIndex === 0 ? '#8257E5' : '#04D361'
                    )
                }}
                transitionAnimationDuration={200}
                containerStyles={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end'
                }}
                imageContainerStyles={{
                    flex: 1,
                    paddingBottom: 0
                }}
                titleStyles={{
                    color: '#6A618016',
                    fontFamily: 'Archivo_400Regular',
                    marginBottom: 25,
                    marginHorizontal: 20,
                    fontSize: 50,
                    textAlign: 'left',
                    marginTop: 50
                }}
                subTitleStyles={{
                    color: '#6A6180',
                    fontFamily: 'Archivo_400Regular',
                    marginBottom: 150,
                    marginHorizontal: 20,
                    fontSize: 32,
                    textAlign: 'left'
                }}
                pages={[
                    {
                        backgroundColor: '#F0F0F7',
                        image: (
                            <IconContainerView backgroundImage="#8257e5">
                                <IconContainerImageBackground
                                    source={onboardingPageBackground01}
                                >
                                    <Image
                                        source={studyIcon}
                                        style={{
                                            width: 175,
                                            height: 175
                                        }}
                                    />
                                </IconContainerImageBackground>
                            </IconContainerView>
                        ),
                        title: '01.',
                        subtitle:
                            'Encontre vários professores para ensinar você'
                    },
                    {
                        backgroundColor: '#F0F0F7',
                        image: (
                            <IconContainerView backgroundImage="#04D361">
                                <IconContainerImageBackground
                                    source={onboardingPageBackground02}
                                >
                                    <Image
                                        source={giveClassesIcon}
                                        style={{
                                            width: 175,
                                            height: 175
                                        }}
                                    />
                                </IconContainerImageBackground>
                            </IconContainerView>
                        ),
                        title: '02.',
                        subtitle: 'Ou dê aulas sobre o que você mais conhece'
                    }
                ]}
            />
        </ContainerView>

        //#endregion
    )
}
