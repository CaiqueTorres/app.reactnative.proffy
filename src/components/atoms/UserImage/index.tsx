import React from 'react'

import { Ionicons } from '@expo/vector-icons'

import { ImageView, ProfileImage } from './styles'

/**
 * The main app's user image props
 */
export interface UserImageProps {
    readonly size: number
    readonly imageUri?: string
}

/**
 * The main app's user image
 *
 * It is used to show the profile image based on the url
 */
const UserImage: React.FC<UserImageProps> = ({
    size,
    imageUri
}: UserImageProps): JSX.Element => {
    return (
        //#region JSX

        <ImageView size={size}>
            {!imageUri ? (
                <Ionicons name="md-person" size={size - 10} color="#6A6180" />
            ) : (
                <ProfileImage source={{ uri: imageUri }} size={size} />
            )}
        </ImageView>

        //#endregion
    )
}

UserImage.displayName = 'UserImage'

export default UserImage
