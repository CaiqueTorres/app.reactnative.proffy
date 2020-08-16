import { StyleSheet } from 'react-native'

import { colors } from '../../styles'

const inputHeight = 65
const paddingLeft = 25

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        height: inputHeight,
        borderWidth: 1,
        borderColor: "#E6E6F0",
        backgroundColor: colors.white,
    },

    textInput: {
        paddingLeft: paddingLeft,
        height: inputHeight,
    },

    purpleLine: {
        height: "65%",
        width: "100%",
        position: "absolute",
        borderLeftColor: "#8257E5",
        borderLeftWidth: 3
    },

    placeHolderBox: {
        flex: 1,
        position: "absolute",
    },

    placeHolderText: {
        paddingLeft: paddingLeft,
        color: "#C1BCCC",
        fontSize: 14
    },
})

export default styles
