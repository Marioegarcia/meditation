import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { adjust } from '../../utils/Dimentions'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { colores } from '../../theme/appTheme'

export const BtnTime = ({texto,handle}) => {

  return (
    <>
        <TouchableOpacity
        onPress={handle}
        style={styles.btn}
        activeOpacity={0.5}
        >
            <View style={styles.btnContent} >
                
                <Text style={styles.btnText} >{texto} </Text>
                {/* {
                    icono && (
                        <Icon name={icono} color={colores.blanco} size={ adjust(26) } />            
                    )
                } */}
                
            </View>
            
        </TouchableOpacity>
    </>
  )
}


const styles = StyleSheet.create({
    btn:{
        backgroundColor: colores.secundario,
        borderRadius:10,
        
        height:adjust(40),
        width:adjust(100),
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5
    },
    btnContent:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    btnText:{
        fontSize:adjust(16),
        color:'white',
        textTransform:'uppercase'
    }
})