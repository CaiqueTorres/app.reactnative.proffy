import React from 'react'
import Button from '../../components/atoms/Button'

import { ContainerView } from './styles'

export default function LoginPage(): JSX.Element {
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
