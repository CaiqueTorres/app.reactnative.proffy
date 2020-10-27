import React from 'react'
import { StatusBar } from 'react-native'

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AppStackParamsList } from '../../routes/AppStack'

import {
    ContainerView,
    SuccessImage,
    TitleView,
    TitleText,
    BackgroundImage,
    SubtitleText
} from './styles'

import Button from '../../components/atoms/Button'

import backgroundImage from '../../assets/images/success/background.png'
import successIcon from '../../assets/images/success/success.png'

/**
 * The app's generic succes page properties
 */
export interface SuccessPageProps {
    readonly title: string
    readonly subtitle: string
    readonly buttonTitle: string
}

/**
 * The app's generic succes page
 */
const SuccessPage: React.FC = (): JSX.Element => {
    const route = useRoute<RouteProp<AppStackParamsList, 'SuccessPage'>>()
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'SuccessPage'>
    >()

    StatusBar.setTranslucent(true)
    StatusBar.setBarStyle('light-content')

    return (
        //#region JSX

        <ContainerView>
            <TitleView>
                <BackgroundImage source={backgroundImage} />
                <SuccessImage source={successIcon} />
                <TitleText>{route.params.title}</TitleText>
                <SubtitleText>{route.params.subtitle}</SubtitleText>
            </TitleView>
            <Button
                enabled
                text={route.params.buttonTitle}
                style={{ height: 65 }}
                onPress={navigation.popToTop}
            />
        </ContainerView>

        //#endregion
    )
}

SuccessPage.displayName = 'Success'

export default SuccessPage
