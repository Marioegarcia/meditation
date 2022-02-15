import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { adjust } from '../../utils/Dimentions'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { colores } from '../../theme/appTheme'

export const BtnTime = ({icono,handle}) => {

  return (
    <>
        <TouchableOpacity
        onPress={handle}
        style={styles.btn}
        activeOpacity={0.5}
        >
            <View style={styles.btnContent} >
                <Icon name={icono} color={colores.blanco} size={ adjust(26) } />
               
            </View>
            
        </TouchableOpacity>
    </>
  )
}


const styles = StyleSheet.create({
    btn:{
        backgroundColor: colores.purple,
        borderRadius:50,
        
        height:adjust(60),
        width:adjust(60),
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5
    },
    btnContent:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

       
    },
})