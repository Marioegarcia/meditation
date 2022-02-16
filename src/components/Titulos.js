import React from 'react'
import { Text } from 'react-native'
import { colores } from '../theme/appTheme'
import { adjust } from '../utils/Dimentions'

const Titulos = ({texto,size = 24}) => {
    return (
        
        <Text style={{
            fontSize: adjust(size),
            fontWeight: 'bold',
            color: colores.purple
        }} > {texto} </Text>
        
    )
}

export default Titulos

