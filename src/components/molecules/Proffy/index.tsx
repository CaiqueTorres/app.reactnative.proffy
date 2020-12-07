import React from 'react'
import { ImageSourcePropType, View } from 'react-native'

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
    WhiteCircleView,
    ContactRectButton,
    ContactRectButtonText
} from './styles'

import { TimeProps } from '../../../api/time'
import LikeButton from '../../atoms/LikeButton'

export interface ProffyProps {
    readonly profileImage: ImageSourcePropType
    readonly name: string
    readonly subject: string
    readonly description: string
    readonly workDays: TimeProps[]
    readonly price: number
}

const Proffy: React.FC<ProffyProps> = ({
    profileImage,
    name,
    subject,
    description,
    price
}: ProffyProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerView>
            <HeaderView>
                <ProfileView>
                    <ProfileImage source={profileImage} />
                    <View>
                        <ProfileNameText>{name}</ProfileNameText>
                        <ProfileSubjectText>{subject}</ProfileSubjectText>
                    </View>
                </ProfileView>
                <ProfileDescriptionText>{description}</ProfileDescriptionText>
            </HeaderView>
            <FooterView>
                <PriceView>
                    <PriceTitleText>Preço da minha hora:</PriceTitleText>
                    <PriceValueText>{price}</PriceValueText>
                </PriceView>
                <ButtonsView>
                    <LikeButton></LikeButton>
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
