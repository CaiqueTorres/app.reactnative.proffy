import { StyleSheet } from 'react-native'
import { Archivo_400Regular } from '@expo-google-fonts/archivo'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundImage: {
        backgroundColor: "#8257E5",
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-between",
        alignItems: "center"
    },

    logoBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },

    logoText: {
        color: "#D4C2FF",
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        maxWidth: 150
    },

    loginBox: {
        flex: 1,
        width: "100%",
        backgroundColor: "#F0F0F7",
        justifyContent: "center",
        alignItems: "center"
    },
})
