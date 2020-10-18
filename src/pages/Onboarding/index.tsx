import React from 'react'
import { Image, ImageBackground } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper'

import { ContainerView, ContainerText } from './styles'

import studyIcon from '../../assets/images/study.png'
import giveClassesIcon from '../../assets/images/give-classes.png'
import { Archivo_400Regular } from '@expo-google-fonts/archivo'

/**
 * The onboarding page
 *
 * This component stores the logic and the styles and has the objective presents the app
 */
export default function OnboardingPage(): JSX.Element {
    return (
        //#region JSX

        <ContainerView>
            <Onboarding
                transitionAnimationDuration={200}
                imageContainerStyles={{
                    position: 'absolute',
                    top: 150
                }}
                titleStyles={{
                    color: '#6A618016',
                    fontFamily: 'Archivo_400Regular'
                }}
                subTitleStyles={{
                    color: '#6A6180'
                }}
                pages={[
                    {
                        backgroundColor: '#8257e5',
                        image: <Image source={studyIcon} />,
                        title: '01.',
                        subtitle:
                            'Encontre vários professores para ensinar você'
                    },
                    {
                        backgroundColor: '#04D361',
                        image: <Image source={giveClassesIcon} />,
                        title: '02.',
                        subtitle: 'Ou dê aulas sobre o que você mais conhece'
                    }
                ]}
            />
        </ContainerView>

        //#endregion
    )
}
