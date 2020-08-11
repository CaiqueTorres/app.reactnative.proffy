import { StyleSheet } from 'react-native'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logoBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    backgroundImage: {
        backgroundColor: "#8257E5",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },

    logoText: {
        color: "#D4C2FF",
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        width: 150
    },

    loginBox: {
        flex: 1,
        width: "100%",
        padding: 20,
        backgroundColor: "#F0F0F7",
        alignItems: "center",
        justifyContent: "center",
    },

    doLogin: {

    },

    createAccount: {

    },

    header: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },

    inputEmail: {
        flex: 1,
    },

    passwordInput: {
        flex: 1,
    },

    footer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    },

    footerHeader: {
        width:"100%",
        paddingHorizontal: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    footerButton: {
        backgroundColor: "#ccc",
        flex: 1,
        width: "90%",
        margin: 20
    },

    buttonText: {

    }
})
