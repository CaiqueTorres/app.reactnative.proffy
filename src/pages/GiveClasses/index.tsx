import React, { Dispatch } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import { useDispatch } from 'react-redux'

import { AntDesign } from '@expo/vector-icons'
import { Picker } from '@react-native-community/picker'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { getItemAsync } from 'expo-secure-store'

import { setMe } from '../../store/user/actions'
import { UserActions } from '../../store/user/types'

import useMe from '../../hooks/useMe'
import useStateAndCheck from '../../hooks/useStateAndCheck'
import useSubjects from '../../hooks/useSubjects'

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

import { UserService } from '../../api/userService'
import { SubjectProxy } from '../../models/subject/subjectProxy'
import { TimeProps } from '../../models/time/time'
import { AppStackParamsList } from '../../navigations/appStack'
import uuid from 'uuid-random'

interface PartialUpdateUserPayload {
    about?: string
    whatsapp?: string
    subjectId?: number
    cost?: number
}

/**
 * Tha main app's give classes page
 */
const GiveClassesPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'GiveClassesPage'>
    >()

    const dispatch = useDispatch<Dispatch<UserActions>>()

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
    ] = useStateAndCheck<TimeProps[]>([])

    const validUserData =
        (hasChangedPayload || hasChangedTimePropsList) &&
        payload &&
        Object.values(payload).every((value) => !!value)

    //#region Functions

    /**
     * Function that can update the user data in the database
     */
    async function updateUser(): Promise<void> {
        if (!user || !user.id) return

        try {
            const token = await getItemAsync('token')

            if (!token) throw new Error('The token is null!')

            await UserService.updateUser(user.id, payload, token)

            setHasChangedPayload(false)
            setHasChangedTimePropsList(false)

            setMeInRootState(token)

            navigateToSuccessPage()
        } catch (exception) {
            console.log(exception)
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
                        text="Salvar cadastro"
                        style={{
                            height: 65,
                            marginVertical: 10
                        }}
                        onPress={updateUser}
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
