import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    
    textInput: {
        height: 65,
        paddingLeft: 25,
        borderWidth: 1,
        borderColor: "#E6E6F0",
        backgroundColor: colors.white,
    },

    purpleLine: {
        height: "75%",
        width: "100%",
        position: "absolute",
        borderLeftColor: "#8257E5",
        borderLeftWidth: 3
    }
})

export default styles
