import { StyleSheet } from 'react-native'
import { colors } from '../../styles'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundImage: {
        flex: 1,
        backgroundColor: "#8257E5",
    },

    logoBox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    logoTexts: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
    },

    logoText: {
        color: "#D4C2FF",
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        width: 150
    },

    loginBox: {
        flex: 1,
        backgroundColor: "#F0F0F7",
        padding: 25,
        justifyContent: "center"
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    doLogin: {
        color: "#32264D",
        fontFamily: "Poppins_400Regular",
        fontWeight: "bold",
        fontSize: 28,
    },

    createAccount: {
        fontFamily: "Poppins_400Regular",
        color: "#9871F5"
    },

    inputBox: {
        justifyContent: "center",
        marginVertical: 40,
    },

    emailInput: {
        height: 65,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lighter,
        backgroundColor: colors.white
    },

    passwordInput: {
        height: 65,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lighter,
        backgroundColor: colors.white
    },

    footer: {

    },

    footerHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        alignItems: "center",
    },

    footerButton: {
        marginTop: 40,
        backgroundColor: colors.light,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },

    buttonText: {

    }
})

export default styles
