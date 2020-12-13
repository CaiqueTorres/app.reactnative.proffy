import React, { useState } from 'react'

import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker'

import {
    ContainerView,
    ImageView,
    ProfileImage as ProfileImageSC,
    CameraRectButton
} from './styles'

/**
 * The app's main profile image properties
 */
export interface ProfileImageProps {
    readonly size?: number
    readonly initialImageUri?: string
    onChangedImage?(imageUri: string): void
}

/**
 * The app's main profile image
 *
 * It can pick some image from gallery as set it as the profile image
 */
const ProfileImage: React.FC<ProfileImageProps> = ({
    size = 200,
    initialImageUri,
    onChangedImage
}: ProfileImageProps): JSX.Element => {
    const [imageUri, setImageUri] = useState(initialImageUri)

    //#region Functions

    async function getPermission(): Promise<void> {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!')
        }
    }

    async function pickImage(): Promise<void> {
        await getPermission()

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })

        if (!result.cancelled) setImageUri(result.uri)

        if (!result.cancelled && onChangedImage) onChangedImage(result.uri)
    }

    //#endregion

    return (
        //#region JSX

        <ContainerView>
            <ImageView size={size}>
                {!imageUri ? (
                    <Ionicons name="md-person" size={100} color="#6A6180" />
                ) : (
                    <ProfileImageSC source={{ uri: imageUri }} size={size} />
                )}
            </ImageView>
            <CameraRectButton
                onPress={() => {
                    pickImage()
                }}
            >
                <Feather name="camera" size={24} color="#fff" />
            </CameraRectButton>
        </ContainerView>

        //#endregion
    )
}

ProfileImage.displayName = 'ProfileImage'

export default ProfileImage
