import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import useStateAndCheck from '../../hooks/useStateAndCheck'

import {
    ContainerSafeAreaView,
    ContainerScrollView,
    DetailsView,
    DetailsImageBackground,
    DetailsTitleText,
    DetailsSubtitleText,
    UserDataView,
    UserDataTitleText,
    UserDataTextInput,
    HeaderView,
    TitleText,
    NewText
} from './styles'

import Button from '../../components/atoms/Button'
import Header from '../../components/atoms/Header'
import AvailableTimeElement from '../../components/molecules/AvailableTimeElement'

import { TimeProps } from '../../api/time'
import backgroundImage from '../../assets/images/login/login-page-background.png'
import { AppStackParamsList } from '../../navigations/appStack'
import ProfileImage from './ProfileImage'
import uuid from 'uuid-random'

/**
 * The app's account page
 */
const AccountPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'AccountPage'>
    >()

    const [, setImage, hasChangedImage] = useStateAndCheck('')
    const [, setName, hasChangedName] = useStateAndCheck('')
    const [, setLastName, hasChangedLastName] = useStateAndCheck('')
    const [, setEmail, hasChangedEmail] = useStateAndCheck('')
    const [, setWhatsapp, hasChangedWhatsapp] = useStateAndCheck('')
    const [, setAbout, hasChangedAbout] = useStateAndCheck('')
    const [, setSubject, hasChangedSubject] = useStateAndCheck('')
    const [, setCost, hasChangedCost] = useStateAndCheck<number | undefined>(
        undefined
    )
    const [
        timePropsList,
        setTimePropsList,
        hasChangedTimePropsList
    ] = useStateAndCheck<TimeProps[]>([])

    const validUserData =
        hasChangedImage ||
        hasChangedName ||
        hasChangedLastName ||
        hasChangedEmail ||
        hasChangedWhatsapp ||
        hasChangedAbout ||
        hasChangedSubject ||
        hasChangedCost ||
        hasChangedTimePropsList

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <Header
                pageTitle="Meu perfil"
                onPress={() => {
                    navigation.pop()
                }}
                style={{ width: '100%' }}
            />
            <ContainerScrollView>
                <DetailsView>
                    <DetailsImageBackground source={backgroundImage}>
                        <ProfileImage onChangedImage={setImage} />
                        <DetailsTitleText>Caique Torres</DetailsTitleText>
                        <DetailsSubtitleText>Física</DetailsSubtitleText>
                    </DetailsImageBackground>
                </DetailsView>
                <UserDataView>
                    <UserDataTitleText>Seus dados</UserDataTitleText>
                    <UserDataTextInput
                        title="Nome"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={setName}
                    />
                    <UserDataTextInput
                        title="Sobrenome"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={setLastName}
                    />
                    <UserDataTextInput
                        title="E-mail"
                        keyboardType="email-address"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={setEmail}
                    />
                    <UserDataTextInput
                        title="Whatsapp"
                        keyboardType="phone-pad"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={setWhatsapp}
                    />
                    <UserDataTextInput
                        multiline
                        title="Sobre"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={setAbout}
                    />
                    <UserDataTitleText>Sobre a aula</UserDataTitleText>
                    <UserDataTextInput
                        title="Matéria"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={setSubject}
                    />
                    <UserDataTextInput
                        title="Custo da sua hora por aula"
                        keyboardType="decimal-pad"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={(newText: string) =>
                            setCost(Number(newText))
                        }
                    />
                    <>
                        <HeaderView>
                            <TitleText>Horários disponíveis</TitleText>
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    setTimePropsList([
                                        ...timePropsList,
                                        { id: uuid() }
                                    ])
                                }}
                            >
                                <NewText>+ Novo</NewText>
                            </TouchableWithoutFeedback>
                        </HeaderView>
                        {timePropsList.map((element: TimeProps) => {
                            const { id, ...rest } = element
                            return (
                                <AvailableTimeElement
                                    key={id}
                                    onClickDeleteButton={() => {
                                        setTimePropsList(
                                            timePropsList.filter(
                                                (timeProps: TimeProps) =>
                                                    timeProps.id !== id
                                            )
                                        )
                                    }}
                                    style={{
                                        height: 240,
                                        marginVertical: 10
                                    }}
                                    {...rest}
                                />
                            )
                        })}
                    </>

                    <Button
                        enabled={validUserData}
                        enabledColor="#04D361"
                        text="Salvar alterações"
                        style={{
                            height: 65,
                            marginVertical: 10
                        }}
                    />
                </UserDataView>
            </ContainerScrollView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

AccountPage.displayName = 'AccountPage'

export default AccountPage
