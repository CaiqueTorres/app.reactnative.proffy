import { StyleSheet } from 'react-native'

import { colors } from '../../styles'

const inputHeight = 65

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: inputHeight,
        borderWidth: 1,
        borderColor: "#E6E6F0",
        backgroundColor: colors.white,
    },

    passwordBox: {
        flex: 1,
        justifyContent: "center",
    },

    textInput: {
        height: inputHeight,
    },

    purpleLine: {
        height: "65%",
        width: "100%",
        position: "absolute",
        transform: [{ translateX: -25 }],
        borderLeftColor: "#8257E5",
        borderLeftWidth: 3
    },

    placeHolderBox: {
        flex: 1,
        position: "absolute",
    },

    placeHolderText: {
        color: "#C1BCCC",
        fontSize: 14
    },
})

export default styles
