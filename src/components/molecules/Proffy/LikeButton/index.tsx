import React from 'react'

import { Ionicons } from '@expo/vector-icons'

import useToggle from '../../../../hooks/useToggle'

import { ContainerRectButton } from './styles'

/**
 * The main app'a like button properties
 */
export interface LikeButtonProps {
    liked?: boolean
    activeBackgroundColor?: string
    deactiveBackgroundColor?: string
    heartSize?: number
    onToggle?(value: boolean): void
}

/**
 * The main app's like button
 *
 * This component is used in the Proffy component, the user can
 * click on it and favoritate a proffy
 */
const LikeButton: React.FC<LikeButtonProps> = ({
    liked = false,
    activeBackgroundColor = '#8257E5',
    deactiveBackgroundColor = '#E33D3D',
    heartSize = 28,
    onToggle
}: LikeButtonProps): JSX.Element => {
    //#region States

    const [active, toggle] = useToggle(liked)

    //#endregion

    //#region Functions

    function handleOnPress(): void {
        toggle()
        if (onToggle) onToggle(active)
    }

    //#endregion

    return (
        //#region JSX

        <ContainerRectButton
            onPress={handleOnPress}
            style={{
                backgroundColor: active
                    ? activeBackgroundColor
                    : deactiveBackgroundColor
            }}
        >
            {active ? (
                <Ionicons name="md-heart" size={heartSize} color="#fff" />
            ) : (
                <Ionicons
                    name="md-heart-dislike"
                    size={heartSize}
                    color="#fff"
                />
            )}
        </ContainerRectButton>

        //#endregion
    )
}

LikeButton.displayName = 'HeartButton'

export default LikeButton
