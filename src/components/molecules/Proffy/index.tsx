import React from 'react'
import { View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import {
    ContainerView,
    HeaderView,
    ProfileView,
    ProfileImage,
    ProfileNameText,
    ProfileSubjectText,
    ProfileDescriptionText,
    FooterView,
    PriceView,
    PriceTitleText,
    PriceValueText,
    ButtonsView,
    LikeRectButton,
    WhiteCircleView,
    ContactRectButton,
    ContactRectButtonText
} from './styles'

import profileImage from '../../../assets/images/profile.jpg'

const Proffy: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <ContainerView>
            <HeaderView>
                <ProfileView>
                    <ProfileImage source={profileImage} />
                    <View>
                        <ProfileNameText>Fulano</ProfileNameText>
                        <ProfileSubjectText>Matéria</ProfileSubjectText>
                    </View>
                </ProfileView>
                <ProfileDescriptionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </ProfileDescriptionText>
            </HeaderView>
            <FooterView>
                <PriceView>
                    <PriceTitleText>Preço da minha hora:</PriceTitleText>
                    <PriceValueText>R$ 20,00 reais</PriceValueText>
                </PriceView>
                <ButtonsView>
                    <LikeRectButton></LikeRectButton>
                    <ContactRectButton>
                        <View>
                            <WhiteCircleView />
                            <Ionicons
                                name="logo-whatsapp"
                                size={30}
                                color="#4CAF50"
                            />
                        </View>
                        <ContactRectButtonText>
                            Entrar em contato
                        </ContactRectButtonText>
                    </ContactRectButton>
                </ButtonsView>
            </FooterView>
        </ContainerView>

        //#endregion
    )
}

Proffy.displayName = 'Proffy'

export default Proffy
