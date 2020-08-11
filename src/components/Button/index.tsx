import React from 'react'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'

import styles from './styles'

const Button: React.FC<RectButtonProperties> = ({ children, ...rest }) => {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            {children}
        </RectButton>
    )
}

export default Button
