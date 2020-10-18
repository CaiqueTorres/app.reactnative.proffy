import styled from 'styled-components/native'

export const ContainerView = styled.View`
    flex: 1;
`

export const IconContainerView = styled.View`
    width: 100%;
    height: 100%;
    padding: 20px;
    background: ${(props: { backgroundImage: string }) =>
        props.backgroundImage};
`

export const IconContainerImageBackground = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
`
