import React from 'react'
import { Text ,StyleSheet} from 'react-native'
import { colores } from '../theme/appTheme'
import { adjust } from '../utils/Dimentions'

const Titulos = ({texto}) => {
    return (
        
        <Text style={styles.titulo} > {texto} </Text>
        
    )
}

export default Titulos

const styles = StyleSheet.create({
    titulo:{
        fontSize: adjust(24),
        fontWeight: 'bold',
        color: colores.purple
    }
})
