import React from 'react'
import {
    StyleProp,
    TouchableWithoutFeedback,
    View,
    ViewStyle
} from 'react-native'
import Emoji from 'react-native-emoji'

import { AntDesign } from '@expo/vector-icons'

import { StatusBar } from 'expo-status-bar'

import {
    ContainerView,
    BackButtonView,
    PageTitleText,
    LogoImage,
    ChildrenView,
    HeaderView,
    TitleText,
    ProffysAmountView,
    ProffysAmountText
} from './styles'

import logoImage from '../../../assets/images/logo.png'
import Dropdown from '../Dropdown'

/**
 * The app's main header properties
 */
export interface HeaderProps {
    onPress?(): void
    readonly pageTitle?: string
    readonly title?: string
    readonly proffysAmount?: number
    readonly emojiName?: string
    readonly style?: StyleProp<ViewStyle>
    readonly children?: JSX.Element
}

/**
 * The app's main header
 */
const Header: React.FC<HeaderProps> = ({
    onPress,
    pageTitle,
    emojiName = 'nerd_face',
    style,
    title = 'Title',
    proffysAmount = 0,
    children
}: HeaderProps): JSX.Element => {
    return (
        //#region JSX

        <>
            <ContainerView style={style}>
                <StatusBar
                    translucent
                    style="light"
                    backgroundColor="#774dd6"
                />
                <TouchableWithoutFeedback onPress={onPress}>
                    <BackButtonView>
                        <AntDesign name="arrowleft" size={24} color="#D4C2FF" />
                    </BackButtonView>
                </TouchableWithoutFeedback>
                <PageTitleText>{pageTitle}</PageTitleText>
                <LogoImage source={logoImage} />
            </ContainerView>
            <ChildrenView>
                <HeaderView>
                    <TitleText>{title}</TitleText>
                    <ProffysAmountView>
                        <Emoji name={emojiName} style={{ fontSize: 20 }} />
                        <ProffysAmountText>
                            {proffysAmount} proffys
                        </ProffysAmountText>
                    </ProffysAmountView>
                </HeaderView>
                <View>
                    <Dropdown title="Matéria" />
                </View>
            </ChildrenView>
        </>

        //#endregion
    )
}

Header.displayName = 'Header'

export default Header
