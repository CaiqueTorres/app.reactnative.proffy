import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import useToggle from '../../../hooks/useToggle'

import { ContainerView, FilterText } from './styles'

const Filter: React.FC = (): JSX.Element => {
    const [active, toggle] = useToggle(false)

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
        </>

        //#endregion
    )
}

Filter.displayName = 'Filter'

export default Filter
