import React from 'react'

import { Picker } from '@react-native-community/picker'

import { ContainerView, TimeView } from './styles'

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
                <Dropdown
                    style={{ flex: 1, marginRight: 10 }}
                    title="Dia da semana"
                >
                    <Picker.Item label="6 horas" value={6} />
                    <Picker.Item label="7 horas" value={7} />
                    <Picker.Item label="8 horas" value={8} />
                    <Picker.Item label="9 horas" value={9} />
                    <Picker.Item label="10 horas" value={10} />
                    <Picker.Item label="10 horas" value={11} />
                    <Picker.Item label="10 horas" value={12} />
                    <Picker.Item label="10 horas" value={13} />
                    <Picker.Item label="10 horas" value={14} />
                    <Picker.Item label="10 horas" value={15} />
                    <Picker.Item label="10 horas" value={16} />
                    <Picker.Item label="10 horas" value={17} />
                    <Picker.Item label="10 horas" value={18} />
                </Dropdown>
                <Dropdown
                    style={{ flex: 1, marginLeft: 10 }}
                    title="Dia da semana"
                >
                    <Picker.Item label="6 horas" value={6} />
                    <Picker.Item label="7 horas" value={7} />
                    <Picker.Item label="8 horas" value={8} />
                    <Picker.Item label="9 horas" value={9} />
                    <Picker.Item label="10 horas" value={10} />
                    <Picker.Item label="10 horas" value={11} />
                    <Picker.Item label="10 horas" value={12} />
                    <Picker.Item label="10 horas" value={13} />
                    <Picker.Item label="10 horas" value={14} />
                    <Picker.Item label="10 horas" value={15} />
                    <Picker.Item label="10 horas" value={16} />
                    <Picker.Item label="10 horas" value={17} />
                    <Picker.Item label="10 horas" value={18} />
                </Dropdown>
            </TimeView>
        </ContainerView>

        //#endregion
    )
}

AvailableTimeElement.displayName = 'AvailableTimeElement'

export default AvailableTimeElement
