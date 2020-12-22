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
    readonly initialDate?: Date
    readonly style?: StyleProp<ViewStyle>
    readonly containerStyle?: StyleProp<ViewStyle>
    onChangeDateTime?(selectedDate: Date | undefined): void
}

/**
 * The main app's date picker
 */
const TimePicker: React.FC<TimePickerProps> = ({
    title,
    initialDate = new Date(),
    style,
    containerStyle,
    onChangeDateTime
}: TimePickerProps): JSX.Element => {
    //#region States

    const [dateText, setDateText] = useState('')
    const [date, setDate] = useState(initialDate)
    const [active, toggleValue] = useToggle(false)

    //#endregion

    //#region Functions

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
        if (selectedDate) setDateText(formatDate(selectedDate))
        if (onChangeDateTime) onChangeDateTime(selectedDate)
        setDate(selectedDate || date)
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
                    value={date}
                    onChange={handleOnChange}
                />
            )}
        </ContainerView>

        //#endregion
    )
}

TimePicker.displayName = 'DatePicker'

export default TimePicker
