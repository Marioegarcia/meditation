import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { colores } from '../theme/appTheme'
import { adjust, windowWidth } from '../utils/Dimentions'


export const AccesoDirectoHome = ({texto,icono,nav}) => {
  return (
    <TouchableOpacity onPress={nav} activeOpacity={0.9} >
        <View style={styles.content} >
            <Icon name={icono}  size={adjust(12)} color={colores.purple} />
            <Text style={styles.texto} >{texto}</Text>
        </View>
    
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    content:{
        justifyContent:'center',
        alignItems:'center',
        // borderWidth:1,
        borderRadius:10,
        width:windowWidth / 100 * 28,
        height:windowWidth / 100 * 15,
        paddingHorizontal:5,
        // borderColor:colores.principal,
        backgroundColor:colores.bgLight,
        elevation:2
        
    },
    texto:{
        color:colores.purple,
        fontSize:adjust(10),
        fontWeight:'bold'
    }
})