import React, { useState } from 'react'
import styled from 'styled-components/native'

interface ButtonProperties {
    onPress(): any
    backgroundColor: string
}

const Button: React.FC<ButtonProperties> = ({ backgroundColor, onPress }) => {
    return (
        <ButtonView backgroundColor={backgroundColor}>

        </ButtonView>
    )
}

const ButtonView = styled.View`
    background: ${(props: { backgroundColor: string }) => props.backgroundColor};
`
