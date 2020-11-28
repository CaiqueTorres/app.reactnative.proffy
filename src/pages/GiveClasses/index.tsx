import React, { useState } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

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
import Header from '../../components/atoms/Header'
import AvailableTimeElement from '../../components/molecules/AvailableTimeElement'

import { TimeProps } from '../../api/time'
import { AppStackParamsList } from '../../navigations/appStack'
import { isStringEmpty, validateTimePropsList } from '../../utils/validation'
import uuid from 'uuid-random'

/**
 * Tha main app's give classes page
 */
const GiveClassesPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'GiveClassesPage'>
    >()

    const [whatsapp, setWhatsapp] = useState('')
    const [about, setAbout] = useState('')
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState<number | undefined>(undefined)
    const [timePropsList, setTimePropsList] = useState<TimeProps[]>([])

    const enabled =
        !isStringEmpty(whatsapp) &&
        !isStringEmpty(about) &&
        !isStringEmpty(subject) &&
        cost != undefined &&
        validateTimePropsList(timePropsList)

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <Header
                title="Dar aulas"
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
                        onChangeText={(text: string) => {
                            setCost(Number(text))
                        }}
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
                        enabled={enabled}
                        enabledColor="#04D361"
                        text="Salvar cadastro"
                        style={{
                            height: 65,
                            marginVertical: 10
                        }}
                        onPress={() => {
                            navigation.push('SuccessPage', {
                                title: 'Cadastro Salvo!',
                                subtitle:
                                    'Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.',
                                buttonTitle: 'Ir para o ínicio'
                            })
                        }}
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
