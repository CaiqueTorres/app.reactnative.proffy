import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)``

export const ChildrenView = styled.View`
    background: #8257e5;
    padding: 40px 35px 40px 35px;
    justify-content: space-between;
`

export const HeaderView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const TitleText = styled.Text`
    color: #fff;
    font-size: 24px;
    width: 200px;
    font-family: Archivo_400Regular;
`

export const ProffysAmountView = styled.View`
    flex-direction: row;
    align-items: center;
    height: 33px;
`

export const ProffysAmountText = styled.Text`
    color: #d4c2ff;
    font-size: 12px;
    font-family: Poppins_400Regular;
    margin-left: 10px;
`
