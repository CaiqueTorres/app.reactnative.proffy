import React from 'react'
import { StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native'

import { Picker } from '@react-native-community/picker'

import {
    ContainerView,
    TimeView,
    DeleteView,
    DeleteText,
    DeleteLine
} from './styles'

import { WeekDay } from '../../../utils/date'
import TimePicker from '../../atoms/DatePicker'
import Dropdown from '../../atoms/Dropdown'

export interface TimeProps {
    readonly weekDay?: WeekDay
    readonly from?: Date
    readonly to?: Date
}

export interface AvailableTimeElementProps extends TimeProps {
    readonly style?: StyleProp<ViewStyle>
    readonly displayDeleteButton?: boolean
    onClickDeleteButton?(): void
}

const AvailableTimeElement: React.FC<AvailableTimeElementProps> = ({
    style,
    weekDay = WeekDay.MONDAY,
    displayDeleteButton = true,
    onClickDeleteButton
}: AvailableTimeElementProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerView style={style}>
            <Dropdown title="Dia da semana" defaultValue={weekDay}>
                <Picker.Item label={WeekDay.MONDAY} value={WeekDay.MONDAY} />
                <Picker.Item label={WeekDay.TUESDAY} value={WeekDay.TUESDAY} />
                <Picker.Item
                    label={WeekDay.WEDNESDAY}
                    value={WeekDay.WEDNESDAY}
                />
                <Picker.Item
                    label={WeekDay.THURSDAY}
                    value={WeekDay.THURSDAY}
                />
                <Picker.Item label={WeekDay.FRIDAY} value={WeekDay.FRIDAY} />
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
            {displayDeleteButton && (
                <TouchableWithoutFeedback onPress={onClickDeleteButton}>
                    <DeleteView>
                        <DeleteLine />
                        <DeleteText>Excluir horário</DeleteText>
                        <DeleteLine />
                    </DeleteView>
                </TouchableWithoutFeedback>
            )}
        </ContainerView>

        //#endregion
    )
}

AvailableTimeElement.displayName = 'AvailableTimeElement'

export default AvailableTimeElement
