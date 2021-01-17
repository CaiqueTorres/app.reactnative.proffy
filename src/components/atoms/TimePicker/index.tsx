import React, { useState } from 'react'
import { StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native'

import DateTimePicker, { Event } from '@react-native-community/datetimepicker'

import useToggle from '../../../hooks/useToggle'

import { ContainerView, TitleText, TimeView, TimeText } from './styles'

import { formatDate } from '../../../utils/date'

/**
 * The main app's date picker properties
 */
export interface TimePickerProps {
    readonly title: string
    readonly initialDate?: string
    readonly style?: StyleProp<ViewStyle>
    readonly containerStyle?: StyleProp<ViewStyle>
    onChangeTime?(selectedDate: string | undefined): void
}

/**
 * The main app's date picker
 */
const TimePicker: React.FC<TimePickerProps> = ({
    title,
    initialDate,
    style,
    containerStyle,
    onChangeTime
}: TimePickerProps): JSX.Element => {
    //#region Hooks

    const [dateText, setDateText] = useState(initialDate)
    const [active, toggleValue] = useToggle(false)

    //#endregion

    //#region Functions

    function setHours(dateText = initialDate): Date {
        const newDate = new Date()

        if (dateText) {
            const splittedArray = dateText
                .split(':')
                .map((value) => Number(value))
            newDate.setHours(splittedArray[0], splittedArray[1])
        }

        return newDate
    }

    /**
     * Function that can set the component's date and call the property onChangeDateTime
     * @param _event stores the date-time-picker event
     * @param selectedDate stores the current selected date
     */
    function handleOnChange(
        _event: Event,
        selectedDate: Date | undefined
    ): void {
        toggleValue()
        if (!selectedDate) return

        const newDateText = formatDate(selectedDate)

        setDateText(newDateText)
        if (onChangeTime) onChangeTime(newDateText)
    }

    //#endregion

    return (
        //#region JSX

        <ContainerView style={style}>
            <TitleText>{title}</TitleText>
            <TouchableWithoutFeedback onPress={toggleValue}>
                <TimeView style={containerStyle}>
                    <TimeText>{dateText}</TimeText>
                </TimeView>
            </TouchableWithoutFeedback>
            {active && (
                <DateTimePicker
                    is24Hour
                    mode="time"
                    value={setHours()}
                    onChange={handleOnChange}
                />
            )}
        </ContainerView>

        //#endregion
    )
}

TimePicker.displayName = 'DatePicker'

export default TimePicker
