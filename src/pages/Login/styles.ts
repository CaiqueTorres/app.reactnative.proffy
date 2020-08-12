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
        marginTop: 8,
        fontFamily: "Poppins_400Regular",
        color: "#9871F5"
    },

    inputBox: {
        justifyContent: "center",
        marginVertical: 40,
    },

    emailInput: {
        paddingLeft: 20,
        height: 65,
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 0,
        borderColor: "#E6E6F0",
        backgroundColor: colors.white
    },

    passwordInput: {
        paddingLeft: 20,
        height: 65,
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: "#E6E6F0",
        backgroundColor: colors.white
    },

    footer: {

    },

    footerHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    remindBox: {
        flex: 1,
        flexDirection: "row",
    },

    remindMe: {
        marginLeft: 15,
        fontSize: 13,
        fontFamily: "Poppins_400Regular",
    },

    forgetText: {
        fontSize: 13,
        fontFamily: "Poppins_400Regular",
    },

    footerButton: {
        marginTop: 40,
        backgroundColor: "#DCDCE5",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },

    buttonText: {

    }
})

export default styles
