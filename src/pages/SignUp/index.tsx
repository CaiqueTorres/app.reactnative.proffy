import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const { navigate } = useNavigation()

export default function SignUp() {
    return (
        <View>
            <Text>
                Sign up!
            </Text>
        </View>
    )
}
