import React, { useEffect, useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { AntDesign } from '@expo/vector-icons'

import { ContainerSafeAreaView, DotsView } from './styles'

import Dot from './Dot'

/**
 * The register flow's header properties
 */
export interface SignUpHeaderProps {
    onPress?(): void
    readonly dotsAmount: number
    readonly selectedDot: number
}

/**
 * The register flow's header
 */
const SignUpHeader: React.FC<SignUpHeaderProps> = ({
    dotsAmount,
    selectedDot,
    onPress
}: SignUpHeaderProps): JSX.Element => {
    const [dots, setDots] = useState<number[]>([])

    //#region Effects

    useEffect(() => {
        const aux: number[] = []
        for (let i = 0; i < dotsAmount; i++) aux.push(i)
        setDots(aux)
    }, [])

    //#endregion

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
                            borderRadius: 3,
                            marginHorizontal: 3
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
