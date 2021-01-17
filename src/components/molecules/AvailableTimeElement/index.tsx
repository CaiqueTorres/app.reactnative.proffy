import React, { useState } from 'react'
import { StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native'

import { Picker } from '@react-native-community/picker'

import { TimeProxy } from '../../../models/time/timeProxy'
import { WeekDay } from '../../../models/time/weekDay'

import {
    ContainerView,
    TimeView,
    DeleteView,
    DeleteText,
    DeleteLine
} from './styles'

import { fromWeekDay } from '../../../utils/date'

import Dropdown from '../../atoms/Dropdown'
import TimePicker from '../../atoms/TimePicker'

/**
 * Tha app's main available time element properties
 */
export interface AvailableTimeElementProps extends TimeProxy {
    readonly style?: StyleProp<ViewStyle>
    readonly displayDeleteButton?: boolean
    onClickDeleteButton?(): void
    onChangedValue?(time: TimeProxy): void
}

/**
 * The app's main available time element
 */
const AvailableTimeElement: React.FC<AvailableTimeElementProps> = ({
    style,
    to = '00:00',
    from = '00:00',
    weekDay = WeekDay.MONDAY,
    displayDeleteButton = true,
    onClickDeleteButton,
    onChangedValue
}: AvailableTimeElementProps): JSX.Element => {
    //#region Hooks

    const [time, setTime] = useState<TimeProxy>({ weekDay, to, from })

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
                <Picker.Item
                    label={fromWeekDay(WeekDay.MONDAY)}
                    value={fromWeekDay(WeekDay.MONDAY)}
                />

                <Picker.Item
                    label={fromWeekDay(WeekDay.TUESDAY)}
                    value={fromWeekDay(WeekDay.TUESDAY)}
                />

                <Picker.Item
                    label={fromWeekDay(WeekDay.WEDNESDAY)}
                    value={fromWeekDay(WeekDay.WEDNESDAY)}
                />

                <Picker.Item
                    label={fromWeekDay(WeekDay.THURSDAY)}
                    value={fromWeekDay(WeekDay.THURSDAY)}
                />

                <Picker.Item
                    label={fromWeekDay(WeekDay.FRIDAY)}
                    value={fromWeekDay(WeekDay.FRIDAY)}
                />
            </Dropdown>
            <TimeView>
                <TimePicker
                    title="Das"
                    style={{ marginRight: 10, height: 85 }}
                    containerStyle={{ borderRadius: 8 }}
                    initialDate={from}
                    onChangeTime={(selectedDate: string) => {
                        setTime({ ...time, from: selectedDate })
                        if (onChangedValue) onChangedValue(time)
                    }}
                />

                <TimePicker
                    title="Até"
                    style={{ marginLeft: 10, height: 85 }}
                    containerStyle={{ borderRadius: 8 }}
                    initialDate={to}
                    onChangeTime={(selectedDate: string) => {
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
