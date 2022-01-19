import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { colores } from '../../theme/appTheme'
import { windowHeight, windowWidth } from '../../utils/Dimentions'



const BtnExplorer = ({texto,icono,onClick}) => {
    return (
        <TouchableOpacity 
        style={styles.btn}
        onPress={onClick}
        activeOpacity={0.5}
        >
            <View style={{
                borderWidth: 3,
                borderColor: colores.secundario,
                borderRadius:10,
                justifyContent:'center',
                width:windowWidth * 25 / 100,
                height: windowWidth * 25 / 100,
                alignItems:'center',
                padding:5
            }} >
                <Icon  
                name={icono}  
                size={ windowHeight * 5 / 100 }
                color={colores.secundarioLight} 
                /> 
            </View>
            
            <Text 
            style={{ 
                textAlign:'center',
                color:colores.secundario,
                fontWeight:'bold' 
            }}> 
                {texto} 
            </Text>
        </TouchableOpacity>
    )
}

export default BtnExplorer

const styles = StyleSheet.create({
    btn:{
        width:windowWidth * 25 / 100,
        height: windowWidth * 25 / 100,
    }
})
