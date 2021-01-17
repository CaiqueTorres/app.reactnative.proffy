import React, { Dispatch, useContext } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'

import { Picker } from '@react-native-community/picker'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { getItemAsync } from 'expo-secure-store'

import { SubjectProxy } from '../../models/subject/subjectProxy'
import { TimeProxy } from '../../models/time/timeProxy'
import { WeekDay } from '../../models/time/weekDay'
import { UpdateUserPayload } from '../../models/user/updateUserPayload'

import * as UserService from '../../services/userService'

import { setMe } from '../../store/user/actions'
import { UserActions } from '../../store/user/types'

import useMe from '../../hooks/useMe'
import useStateAndCheck from '../../hooks/useStateAndCheck'
import useSubjects from '../../hooks/useSubjects'

import { LoadingScreenContext } from '../../contexts/loadingScreenContext'

import { AppStackParamsList } from '../../navigations/appStack'

import {
    ContainerSafeAreaView,
    ContainerScrollView,
    DetailsView,
    DetailsImageBackground,
    DetailsNameText,
    DetailsSubjectText,
    UserDataView,
    UserDataTitleText,
    UserDataTextInput,
    HeaderView,
    TitleText,
    NewText
} from './styles'

import Button from '../../components/atoms/Button'
import Dropdown from '../../components/atoms/Dropdown'
import Header from '../../components/atoms/Header'
import AvailableTimeElement from '../../components/molecules/AvailableTimeElement'

import backgroundImage from '../../assets/login/login-page-background.png'

import ProfileImage from './ProfileImage'
import uuid from 'uuid-random'

/**
 * The app's account page
 */
const AccountPage: React.FC = (): JSX.Element => {
    //#region States

    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'AccountPage'>
    >()

    const dispatch = useDispatch<Dispatch<UserActions>>()

    const { setEnabledLoading } = useContext(LoadingScreenContext)

    const user = useMe()

    const subjectsList: SubjectProxy[] = [
        {
            id: 0,
            name: 'Selecione'
        },
        ...(useSubjects() ?? [])
    ]

    const [
        payload,
        setPayload,
        hasChangedPayload,
        setHasChangedPayload
    ] = useStateAndCheck<UpdateUserPayload | undefined>(undefined)

    const [
        timePropsList,
        setTimePropsList,
        hasChangedTimePropsList,
        setHasChangedTimePropsList
    ] = useStateAndCheck<TimeProxy[]>([])

    const validUserData = hasChangedPayload || hasChangedTimePropsList

    //#endregion

    //#region Functions

    /**
     * Function that can update the user data in the database
     */
    async function updateUser(): Promise<void> {
        if (!user || !user.id) return

        setEnabledLoading(true)
        try {
            const token = await getItemAsync('token')

            if (!token) throw new Error('The token is null!')

            await UserService.updateUser(user.id, payload, token)

            setHasChangedPayload(false)
            setHasChangedTimePropsList(false)

            setMeInRootState(token)
        } catch (exception) {
            // console.log(exception)
        } finally {
            setEnabledLoading(false)
        }
    }

    /**
     * Function that can save the logged user data in the application state
     * @param token stores the user token
     */
    async function setMeInRootState(token: string) {
        const me = await UserService.getMe(token)
        dispatch(setMe(me))
    }

    //#endregion

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
                        <ProfileImage
                            onChangedImage={(image: string) => {
                                setPayload({
                                    ...payload,
                                    image
                                })
                            }}
                            defaultValue={user?.image}
                        />

                        <DetailsNameText>{user?.name}</DetailsNameText>

                        <DetailsSubjectText>
                            {user?.subject?.name}
                        </DetailsSubjectText>
                    </DetailsImageBackground>
                </DetailsView>
                <UserDataView>
                    <UserDataTitleText>Seus dados</UserDataTitleText>

                    <UserDataTextInput
                        title="Nome"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={(name: string) => {
                            setPayload({
                                ...payload,
                                name
                            })
                        }}
                        defaultValue={user?.name}
                    />

                    <UserDataTextInput
                        title="Sobrenome"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={(lastName: string) => {
                            setPayload({
                                ...payload,
                                lastName
                            })
                        }}
                        defaultValue={user?.lastName}
                    />

                    <UserDataTextInput
                        title="E-mail"
                        keyboardType="email-address"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={(email: string) => {
                            setPayload({
                                ...payload,
                                email
                            })
                        }}
                        defaultValue={user?.email}
                    />

                    <UserDataTextInput
                        title="Whatsapp"
                        keyboardType="phone-pad"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={(whatsapp: string) => {
                            setPayload({
                                ...payload,
                                whatsapp
                            })
                        }}
                        defaultValue={user?.whatsapp}
                    />

                    <UserDataTextInput
                        multiline
                        title="Sobre"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={(about: string) => {
                            setPayload({
                                ...payload,
                                about
                            })
                        }}
                        defaultValue={user?.about}
                    />

                    <UserDataTitleText>Sobre a aula</UserDataTitleText>

                    <Dropdown
                        title="Matéria"
                        defaultValue={user?.subject?.id}
                        onValueChange={(itemValue: unknown) => {
                            const numberValue = Number(itemValue)
                            setPayload({
                                ...payload,
                                subjectId:
                                    numberValue === 0 ? undefined : numberValue
                            })
                        }}
                    >
                        {subjectsList?.map((subject) => (
                            <Picker.Item
                                key={subject.id}
                                label={subject.name}
                                value={subject.id}
                            />
                        ))}
                    </Dropdown>

                    <UserDataTextInput
                        title="Custo da sua hora por aula"
                        keyboardType="decimal-pad"
                        viewStyle={{ marginVertical: 20 }}
                        onChangeText={(cost: string) =>
                            setPayload({
                                ...payload,
                                cost: Number(cost)
                            })
                        }
                        defaultValue={user?.cost?.toString()}
                    />

                    <HeaderView>
                        <TitleText>Horários disponíveis</TitleText>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                setTimePropsList([
                                    ...timePropsList,
                                    {
                                        id: uuid(),
                                        from: '00:00',
                                        to: '00:00',
                                        weekDay: WeekDay.MONDAY
                                    }
                                ])
                            }}
                        >
                            <NewText>+ Novo</NewText>
                        </TouchableWithoutFeedback>
                    </HeaderView>
                    {timePropsList.map((element: TimeProxy) => {
                        const { id, ...rest } = element
                        return (
                            <AvailableTimeElement
                                key={id}
                                onClickDeleteButton={() => {
                                    setTimePropsList(
                                        timePropsList.filter(
                                            (timeProps: TimeProxy) =>
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
                    <Button
                        enabled={validUserData}
                        enabledColor="#04D361"
                        text="Salvar alterações"
                        style={{
                            height: 65,
                            marginVertical: 10
                        }}
                        onPress={updateUser}
                    />
                </UserDataView>
            </ContainerScrollView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

AccountPage.displayName = 'AccountPage'

export default AccountPage
