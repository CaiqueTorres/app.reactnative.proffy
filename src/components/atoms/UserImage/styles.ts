import styled from 'styled-components/native'

export const ImageView = styled.View`
    background: #f0f0f7;
    width: ${(props: { size: number }) => props.size}px;
    height: ${(props: { size: number }) => props.size}px;
    border-radius: ${(props: { size: number }) => props.size / 2}px;
    justify-content: center;
    align-items: center;
`

export const ProfileImage = styled.Image`
    width: ${(props: { size: number }) => props.size}px;
    height: ${(props: { size: number }) => props.size}px;
    border-radius: ${(props: { size: number }) => props.size / 2}px;
`
