import React, { useState } from 'react'
import { StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native'

import { Picker } from '@react-native-community/picker'

import { TimeProps, WeekDay } from '../../../models/time/time'

import {
    ContainerView,
    TimeView,
    DeleteView,
    DeleteText,
    DeleteLine
} from './styles'

import TimePicker from '../../atoms/DatePicker'
import Dropdown from '../../atoms/Dropdown'

/**
 * Tha app's main available time element properties
 */
export interface AvailableTimeElementProps extends TimeProps {
    readonly style?: StyleProp<ViewStyle>
    readonly displayDeleteButton?: boolean
    onClickDeleteButton?(): void
    onChangedValue?(time: TimeProps): void
}

/**
 * The app's main available time element
 */
const AvailableTimeElement: React.FC<AvailableTimeElementProps> = ({
    style,
    weekDay = WeekDay.MONDAY,
    displayDeleteButton = true,
    onClickDeleteButton,
    onChangedValue
}: AvailableTimeElementProps): JSX.Element => {
    //#region States

    const [time, setTime] = useState<TimeProps>({ weekDay })

    //#endregion

    return (
        //#region JSX

        <ContainerView style={style}>
            <Dropdown
                title="Dia da semana"
                defaultValue={weekDay}
                onValueChange={(itemValue: WeekDay) => {
                    setTime({ ...time, weekDay: itemValue })
                    if (onChangedValue) onChangedValue(time)
                }}
            >
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
                    onChangeDateTime={(selectedDate: Date | undefined) => {
                        setTime({ ...time, from: selectedDate })
                        if (onChangedValue) onChangedValue(time)
                    }}
                />
                <TimePicker
                    title="Até"
                    style={{ marginLeft: 10, height: 85 }}
                    containerStyle={{ borderRadius: 8 }}
                    onChangeDateTime={(selectedDate: Date | undefined) => {
                        setTime({ ...time, to: selectedDate })
                        if (onChangedValue) onChangedValue(time)
                    }}
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
