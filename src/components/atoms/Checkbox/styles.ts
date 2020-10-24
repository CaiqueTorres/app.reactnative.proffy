import styled from 'styled-components/native'

interface ToggleProps {
    size: number
    boxColor: string
}

export const ContainerView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const ToggleView = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    border-radius: 7px;
    border-color: #e6e6f0;
    width: ${(props: ToggleProps) => props.size}px;
    height: ${(props: ToggleProps) => props.size}px;
    background: ${(props: ToggleProps) => props.boxColor};
`
