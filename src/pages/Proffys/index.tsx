import React from 'react'

import { ContainerSafeAreaView } from './styles'

import Proffy from '../../components/molecules/Proffy'

const ProffysPage: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <ContainerSafeAreaView>
            <Proffy />
        </ContainerSafeAreaView>

        //#endregion
    )
}

ProffysPage.displayName = 'ProffysPage'

export default ProffysPage
