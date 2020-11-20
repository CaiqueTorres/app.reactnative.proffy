import React from 'react'

import { Picker } from '@react-native-community/picker'

import { ContainerView, TimeView } from './styles'

import TimePicker from '../../atoms/DatePicker'
import Dropdown from '../../atoms/Dropdown'

const AvailableTimeElement: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <ContainerView>
            <Dropdown title="Dia da semana">
                <Picker.Item label="Segunda-feira" value="Segunda-feira" />
                <Picker.Item label="Terça-feira" value="Terça-feira" />
                <Picker.Item label="Quarta-feira" value="Quarta-feira" />
                <Picker.Item label="Quinta-feira" value="Quinta-feira" />
                <Picker.Item label="Sexta-feira" value="Sexta-feira" />
            </Dropdown>
            <TimeView>
                <TimePicker
                    title="Das"
                    style={{ marginRight: 10, height: 85 }}
                    containerStyle={{ borderRadius: 8 }}
                />
                <TimePicker
                    title="Até"
                    style={{ marginLeft: 10, height: 85 }}
                    containerStyle={{ borderRadius: 8 }}
                />
            </TimeView>
        </ContainerView>

        //#endregion
    )
}

AvailableTimeElement.displayName = 'AvailableTimeElement'

export default AvailableTimeElement
