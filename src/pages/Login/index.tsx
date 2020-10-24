import React from 'react'

import {
    ContainerSafeAreaView,
    IconView,
    LoginView,
    LoginHeaderView,
    LoginHeaderTitleText,
    LoginHeaderCreateAccountText
} from './styles'

import Button from '../../components/atoms/Button'

/**
 * The app login page
 *
 * This component stores all the login page style and logic
 */
const LoginPage: React.FC = () => {
    return (
        //#region JSX

        <ContainerSafeAreaView>
            <IconView>
                <LoginHeaderTitleText>Logo</LoginHeaderTitleText>
            </IconView>
            <LoginView>
                <LoginHeaderView>
                    <LoginHeaderTitleText>Fazer login</LoginHeaderTitleText>
                    <LoginHeaderCreateAccountText>
                        Criar uma conta
                    </LoginHeaderCreateAccountText>
                </LoginHeaderView>
                <Button
                    enabled={false}
                    text="Entrar"
                    style={{ height: 65 }}
                    enabledColor="#04D361"
                    textEnabledColor="#fff"
                />
            </LoginView>
        </ContainerSafeAreaView>

        //#endregino
    )
}

LoginPage.displayName = 'LoginPage'

export default LoginPage
