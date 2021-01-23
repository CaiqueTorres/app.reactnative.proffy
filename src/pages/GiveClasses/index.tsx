import React, { Dispatch, useContext } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import { useDispatch } from 'react-redux'

import { AntDesign } from '@expo/vector-icons'
import { Picker } from '@react-native-community/picker'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { getItemAsync } from 'expo-secure-store'

import { SubjectProxy } from '../../models/subject/subjectProxy'
import { TimeProxy } from '../../models/time/timeProxy'
import { WeekDay } from '../../models/time/weekDay'

import * as TimeService from '../../services/timeService'
import * as UserService from '../../services/userService'

import { setMe } from '../../store/user/actions'
import { UserActions } from '../../store/user/types'

import useMe from '../../hooks/useMe'
import useStateAndCheck from '../../hooks/useStateAndCheck'
import useSubjects from '../../hooks/useSubjects'

import { LoadingScreenContext } from '../../contexts/loadingScreenContext'
import { Times, useTimes } from '../../contexts/timeContext'

import { AppStackParamsList } from '../../navigations/appStack'

import {
    ContainerSafeAreaView,
    DetailsView,
    DetailsTitleText,
    DetailsDescriptionText,
    UserDataView,
    UserDataTitleText,
    UserDataTextInput,
    FooterView,
    FooterTextsView,
    FooterTitleText,
    FooterDescriptionText,
    HeaderView,
    NewText,
    TitleText
} from './styles'

import Button from '../../components/atoms/Button'
import Dropdown from '../../components/atoms/Dropdown'
import Header from '../../components/atoms/Header'
import AvailableTimeElement from '../../components/molecules/AvailableTimeElement'

import { isGetMany, map } from '../../utils/crud'

import uuid from 'uuid-random'

interface PartialUpdateUserPayload {
    readonly about?: string
    readonly whatsapp?: string
    readonly subjectId?: number
    readonly cost?: number
}

/**
 * Tha main app's give classes page
 */
const GiveClassesPage: React.FC = (): JSX.Element => {
    //#region Hooks

    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'GiveClassesPage'>
    >()

    const dispatch = useDispatch<Dispatch<UserActions>>()

    const { setEnabledLoading } = useContext(LoadingScreenContext)

    const user = useMe()
    const subjects = useSubjects()
    const { times, setTimes } = useTimes()

    const subjectsList: SubjectProxy[] = [
        {
            id: 0,
            name: 'Selecione'
        },
        ...(subjects ?? [])
    ]

    const [
        payload,
        setPayload,
        hasChangedPayload,
        setHasChangedPayload
    ] = useStateAndCheck<PartialUpdateUserPayload | undefined>({
        whatsapp: user?.whatsapp,
        about: user?.about,
        cost: user?.cost,
        subjectId: user?.subject?.id
    })

    const [
        timePropsList,
        setTimePropsList,
        hasChangedTimePropsList,
        setHasChangedTimePropsList
    ] = useStateAndCheck<Times>(times)

    const validUserData =
        (hasChangedPayload || hasChangedTimePropsList) &&
        payload &&
        Object.values(payload).every((value) => !!value)

    //#endregion

    //#region Functions

    /**
     * Function that allow creating the new time element
     */
    function createNewTimeElement(): void {
        const time: TimeProxy = {
            id: uuid(),
            weekDay: WeekDay.MONDAY,
            from: '00:00',
            to: '00:00'
        }

        if (isGetMany(timePropsList)) {
            setTimePropsList({
                ...timePropsList,
                data: [...timePropsList.data, time]
            })
            return
        }

        setTimePropsList([...timePropsList, time])
    }

    /**
     * Function that allow redenring all te time elements
     */
    function forEachTimeProp(): JSX.Element[] {
        const array = isGetMany(timePropsList)
            ? timePropsList.data
            : timePropsList

        return array.map((element: TimeProxy) => {
            const { id, ...rest } = element
            return (
                <AvailableTimeElement
                    key={id}
                    id={id}
                    onClickDeleteButton={() => {
                        setTimePropsList(
                            array.filter(
                                (timeProps: TimeProxy) => timeProps.id !== id
                            )
                        )
                    }}
                    onChangedValue={(time: TimeProxy) => {
                        console.log(time)

                        if (Array.isArray(timePropsList))
                            setTimePropsList(
                                timePropsList.map((element) =>
                                    element.id == id ? time : element
                                )
                            )
                        else
                            setTimePropsList(
                                map(timePropsList, (element) =>
                                    element.id == id ? time : element
                                )
                            )

                        setHasChangedTimePropsList(true)
                    }}
                    style={{
                        height: 240,
                        marginVertical: 10
                    }}
                    {...rest}
                />
            )
        })
    }

    /**
     * Function that can update the user data in the database
     */
    async function updateUser(token: string): Promise<void> {
        if (!user || !user.id) return

        await UserService.updateUser(user.id, payload, token)

        setHasChangedPayload(false)

        setMeInRootState(token)
    }

    /**
     * Function that can update the times list data in the database
     * @param token stores the logged user token
     */
    async function updateTimesList(token: string): Promise<void> {
        if (!user || !user.id) return

        await TimeService.clear(user.id, token)

        const times = isGetMany(timePropsList)
            ? timePropsList.data
            : timePropsList

        console.log(times)

        await TimeService.createTimes(
            user.id,
            times.map((time) => ({
                weekDay: time.weekDay,
                from: time.from,
                to: time.to
            })),
            token
        )

        setHasChangedTimePropsList(false)

        setTimes(timePropsList)
    }

    /**
     * Function that update the user data and the times list data
     */
    async function updateData(): Promise<void> {
        const token = await getItemAsync('token')

        if (!token) throw new Error('The token is null!')

        setEnabledLoading(true)
        try {
            await updateUser(token)
            await updateTimesList(token)

            navigateToSuccessPage()
        } catch (exception) {
            console.log(exception)
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

    /**
     * Function that can make the app push the success page
     */
    function navigateToSuccessPage(): void {
        navigation.push('SuccessPage', {
            title: 'Cadastro Salvo!',
            subtitle:
                'Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.',
            buttonTitle: 'Ir para o ínicio'
        })
    }

    //#endregion

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <Header
                pageTitle="Dar aulas"
                onPress={() => {
                    navigation.pop()
                }}
            />

            <ScrollView
                style={{
                    width: '100%'
                }}
            >
                <DetailsView>
                    <DetailsTitleText>
                        Que incrível que você quer dar aulas.
                    </DetailsTitleText>

                    <DetailsDescriptionText>
                        O primeiro passo, é preencher esse formulário de
                        inscrição.
                    </DetailsDescriptionText>
                </DetailsView>
                <UserDataView>
                    <UserDataTitleText>Seus dados</UserDataTitleText>

                    <UserDataTextInput
                        title="Whatsapp"
                        keyboardType="phone-pad"
                        viewStyle={{ marginVertical: 20 }}
                        defaultValue={payload?.whatsapp}
                        onChangeText={(whatsapp: string) => {
                            setPayload({
                                ...payload,
                                whatsapp
                            })
                        }}
                    />

                    <UserDataTextInput
                        multiline
                        title="Sobre"
                        viewStyle={{ marginVertical: 20 }}
                        defaultValue={payload?.about}
                        onChangeText={(about: string) => {
                            setPayload({
                                ...payload,
                                about
                            })
                        }}
                    />

                    <UserDataTitleText>Sobre a aula</UserDataTitleText>

                    <Dropdown
                        title="Matéria"
                        defaultValue={payload?.subjectId}
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
                        defaultValue={payload?.cost?.toString()}
                        onChangeText={(cost: string) =>
                            setPayload({
                                ...payload,
                                cost: Number(cost)
                            })
                        }
                    />

                    <>
                        <HeaderView>
                            <TitleText>Horários disponíveis</TitleText>

                            <TouchableWithoutFeedback
                                onPress={createNewTimeElement}
                            >
                                <NewText>+ Novo</NewText>
                            </TouchableWithoutFeedback>
                        </HeaderView>

                        {forEachTimeProp()}
                    </>

                    <Button
                        enabled={validUserData}
                        enabledColor="#04D361"
                        text="Salvar cadastro"
                        style={{
                            height: 65,
                            marginVertical: 10
                        }}
                        onPress={updateData}
                    />
                    <FooterView>
                        <AntDesign name="warning" size={33} color="#8257E5" />

                        <FooterTextsView>
                            <FooterTitleText>Importante!</FooterTitleText>

                            <FooterDescriptionText>
                                Preencha todos os dados
                            </FooterDescriptionText>
                        </FooterTextsView>
                    </FooterView>
                </UserDataView>
            </ScrollView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

GiveClassesPage.displayName = 'GiveClassesPage'

export default GiveClassesPage
