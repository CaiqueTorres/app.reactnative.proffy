import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AppStackParamsList } from '../../routes/appStack'

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
    FooterDescriptionText
} from './styles'

import Button from '../../components/atoms/Button'
import Header from '../../components/atoms/Header'
import AvailableTimeElement, {
    TimeProps
} from '../../components/molecules/AvailableTimeElement'
import AvailableTimesList from '../../components/organisms/AvailableTimesList'

import uuid from 'uuid-random'

const GiveClassesPage: React.FC = (): JSX.Element => {
    const navigation = useNavigation<
        StackNavigationProp<AppStackParamsList, 'GiveClassesPage'>
    >()

    const [timePropsList, setTimePropsList] = useState<TimeProps[]>([])

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
                    />
                    <UserDataTextInput
                        multiline
                        title="Sobre"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <UserDataTitleText>Sobre a aula</UserDataTitleText>
                    <UserDataTextInput
                        title="Matéria"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <UserDataTextInput
                        title="Custo da sua hora por aula"
                        keyboardType="decimal-pad"
                        viewStyle={{ marginVertical: 20 }}
                    />
                    <AvailableTimesList
                        onClickedNewButton={() => {
                            setTimePropsList([...timePropsList, { id: uuid() }])
                        }}
                    >
                        {timePropsList.map((element: TimeProps) => {
                            const { id, ...rest } = element
                            return (
                                <AvailableTimeElement
                                    key={id}
                                    onClickDeleteButton={() => {
                                        setTimePropsList(
                                            timePropsList.filter(
                                                (timeProps: TimeProps) =>
                                                    timeProps.id != id
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
                    </AvailableTimesList>
                    <Button
                        enabled
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
