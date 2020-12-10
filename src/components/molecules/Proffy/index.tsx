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

import { TimeProps, WeekDay } from '../../../api/time'
import LikeButton from './LikeButton'

/**
 * The main app's proffy component properties
 */
export interface ProffyProps {
    readonly profileImage: ImageSourcePropType
    readonly name: string
    readonly subject: string
    readonly description: string
    readonly workDays: TimeProps[]
    readonly price: number
}

/**
 * The main app's proffy component
 * It is used in the Proffys page and in the Favorites page
 */
const Proffy: React.FC<ProffyProps> = ({
    profileImage,
    name,
    subject,
    description,
    workDays,
    price
}: ProffyProps): JSX.Element => {
    const days = [
        WeekDay.MONDAY,
        WeekDay.TUESDAY,
        WeekDay.WEDNESDAY,
        WeekDay.THURSDAY,
        WeekDay.FRIDAY
    ]

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
                {/* {days.map((day: WeekDay) => {
                    return workDays
                        .map((workDay) => workDay.weekDay)
                        .includes(day) ? (
                        <Time {...day} />
                    ) : (
                        <Time />
                    )
                })} */}
            </HeaderView>
            <FooterView>
                <PriceView>
                    <PriceTitleText>Preço da minha hora:</PriceTitleText>
                    <PriceValueText>{price}</PriceValueText>
                </PriceView>
                <ButtonsView>
                    <LikeButton />
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
