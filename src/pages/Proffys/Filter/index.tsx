import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Picker } from '@react-native-community/picker'

import { SubjectProxy } from '../../../models/subject/subjectProxy'
import { WeekDay } from '../../../models/time/timeProxy'

import useSubjects from '../../../hooks/useSubjects'
import useToggle from '../../../hooks/useToggle'

import { ContainerView, FilterText, DropdownsView, TimeView } from './styles'

import TimePicker from '../../../components/atoms/DatePicker'
import Dropdown from '../../../components/atoms/Dropdown'

/**
 * The proffy filter component
 */
const Filter: React.FC = (): JSX.Element => {
    //#region States

    const [active, toggle] = useToggle(false)

    const subjectsList: SubjectProxy[] = [
        {
            id: 0,
            name: 'Selecione'
        },
        ...(useSubjects() ?? [])
    ]

    //#endregion

    return (
        //#region JSX

        <>
            <TouchableWithoutFeedback onPress={toggle}>
                <ContainerView>
                    <Feather name="filter" size={24} color="#04D361" />
                    <FilterText>Filtrar por dia, hora e matéria</FilterText>
                    <MaterialIcons
                        name={
                            active ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
                        }
                        size={24}
                        color="#A380F6"
                    />
                </ContainerView>
            </TouchableWithoutFeedback>

            {active && (
                <DropdownsView>
                    <Dropdown title="Matéria" defaultValue={0}>
                        {subjectsList?.map((subject) => (
                            <Picker.Item
                                key={subject.id}
                                label={subject.name}
                                value={subject.id}
                            />
                        ))}
                    </Dropdown>

                    <TimeView>
                        <Dropdown
                            title="Dia da semana"
                            defaultValue={WeekDay.MONDAY}
                            style={{ width: '70%' }}
                        >
                            <Picker.Item
                                label={WeekDay.MONDAY}
                                value={WeekDay.MONDAY}
                            />
                            <Picker.Item
                                label={WeekDay.TUESDAY}
                                value={WeekDay.TUESDAY}
                            />
                            <Picker.Item
                                label={WeekDay.WEDNESDAY}
                                value={WeekDay.WEDNESDAY}
                            />
                            <Picker.Item
                                label={WeekDay.THURSDAY}
                                value={WeekDay.THURSDAY}
                            />
                            <Picker.Item
                                label={WeekDay.FRIDAY}
                                value={WeekDay.FRIDAY}
                            />
                        </Dropdown>
                        <TimePicker
                            title="Horário"
                            style={{
                                marginLeft: 10,
                                height: 95
                            }}
                            containerStyle={{ borderRadius: 8 }}
                        />
                    </TimeView>
                </DropdownsView>
            )}
        </>

        //#endregion
    )
}

Filter.displayName = 'Filter'

export default Filter
