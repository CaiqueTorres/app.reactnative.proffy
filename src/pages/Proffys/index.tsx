import React from 'react'
import Emoji from 'react-native-emoji'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import {
    ContainerSafeAreaView,
    ChildrenView,
    HeaderView,
    TitleText,
    ProffysAmountView,
    ProffysAmountText
} from './styles'

import Header from '../../components/atoms/Header'

import { AppStackParamsList } from '../../navigations/appStack'
import Filter from './Filter'

const ProffysPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'GiveClassesPage'>
    >()

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <Header
                pageTitle="Estudar"
                onPress={() => {
                    navigation.pop()
                }}
            />
            <ChildrenView>
                <HeaderView>
                    <TitleText>Proffys Disponíveis</TitleText>
                    <ProffysAmountView>
                        <Emoji name="nerd_face" style={{ fontSize: 20 }} />
                        <ProffysAmountText>{15} proffys</ProffysAmountText>
                    </ProffysAmountView>
                </HeaderView>
                <Filter />
            </ChildrenView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

ProffysPage.displayName = 'ProffysPage'

export default ProffysPage

//#region Old code

/* <Proffy
    profileImage={profileImage}
    name="Fulano"
    subject="Matéria"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    price={20}
    workDays={[
        {
            id: 0,
            weekDay: WeekDay.MONDAY,
            from: '15:00',
            to: '17:00'
        },
        {
            id: 1,
            weekDay: WeekDay.TUESDAY,
            from: '15:00',
            to: '17:00'
        },
        {
            id: 2,
            weekDay: WeekDay.WEDNESDAY,
            from: '15:00',
            to: '17:00'
        },
        {
            id: 3,
            weekDay: WeekDay.THURSDAY,
            from: '15:00',
            to: '17:00'
        },
        {
            id: 4,
            weekDay: WeekDay.FRIDAY,
            from: '15:00',
            to: '17:00'
        }
    ]}
/> */

//#endregion
