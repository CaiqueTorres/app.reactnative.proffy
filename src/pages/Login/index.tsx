import React from 'react'

import { ContainerView } from './styles'

import Button from '../../components/atoms/Button'

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        //#region JSX

        <ContainerView
            style={{
                paddingHorizontal: 40
            }}
        >
            <Button
                enabled
                text="Próximo"
                enabledColor="#8257E5"
                style={{
                    width: '100%',
                    height: 70
                }}
            />
        </ContainerView>

        //#endregino
    )
}

LoginPage.displayName = 'LoginPage'

export default LoginPage
