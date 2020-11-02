import React from 'react'

import { ContainerSafeAreaView } from './styles'

import Header from '../../components/atoms/Header'

const AccountPage: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <ContainerSafeAreaView>
            <Header title="Meu perfil" onPress={() => {}} />
        </ContainerSafeAreaView>

        //#endregion
    )
}

AccountPage.displayName = 'AccountPage'

export default AccountPage
