import React from 'react'

import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import { ContainerView, FilterText } from './styles'

const Filter: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <>
            <ContainerView>
                <Feather name="filter" size={24} color="#04D361" />
                <FilterText>Filtrar por dia, hora e matéria</FilterText>
                <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="#A380F6"
                />
            </ContainerView>
        </>

        //#endregion
    )
}

Filter.displayName = 'Filter'

export default Filter
