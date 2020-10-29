import React, { useEffect, useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { AntDesign } from '@expo/vector-icons'

import { ContainerSafeAreaView, DotsView } from './styles'

import Dot from './Dot'

export interface SignUpHeaderProps {
    onPress?(): void
    readonly dotsAmount: number
    readonly selectedDot: number
}

const SignUpHeader: React.FC<SignUpHeaderProps> = ({
    dotsAmount,
    selectedDot,
    onPress
}: SignUpHeaderProps): JSX.Element => {
    const [dots, setDots] = useState<number[]>([])

    useEffect(() => {
        const aux: number[] = []
        for (let i = 0; i < dotsAmount; i++) aux.push(i)
        setDots(aux)
    }, [])

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <TouchableWithoutFeedback
                onPress={() => {
                    if (onPress) onPress()
                }}
            >
                <AntDesign name="arrowleft" size={24} color="#9C98A6" />
            </TouchableWithoutFeedback>
            <DotsView>
                {dots.map((dot) => (
                    <Dot
                        key={dot}
                        selected={dot === selectedDot}
                        selectedColor="#8257E5"
                        deselectedColor="#C1BCCC"
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginHorizontal: 5
                        }}
                    />
                ))}
            </DotsView>
        </ContainerSafeAreaView>

        //#endregion
    )
}

SignUpHeader.displayName = 'SignUpHeader'

export default SignUpHeader
