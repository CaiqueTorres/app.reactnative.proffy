import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    position: absolute;
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const DotsView = styled.View`
    flex-direction: row;
`
