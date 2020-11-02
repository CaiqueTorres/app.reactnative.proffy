import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { StatusBar } from 'expo-status-bar'

import { ContainerView, BackButtonView, TitleText, LogoImage } from './styles'

import logoImage from '../../../assets/images/logo.png'

/**
 * The app's main header properties
 */
export interface HeaderProps {
    onPress?(): void
    readonly title?: string
}

/**
 * The app's main header
 */
const Header: React.FC<HeaderProps> = ({
    onPress,
    title
}: HeaderProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerView>
            <StatusBar translucent style="light" backgroundColor="#774dd6" />
            <TouchableWithoutFeedback onPress={onPress}>
                <BackButtonView>
                    <AntDesign name="arrowleft" size={24} color="#D4C2FF" />
                </BackButtonView>
            </TouchableWithoutFeedback>
            <TitleText>{title}</TitleText>
            <LogoImage source={logoImage} />
        </ContainerView>

        //#endregion
    )
}

Header.displayName = 'Header'

export default Header
