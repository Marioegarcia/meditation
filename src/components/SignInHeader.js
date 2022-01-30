import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { colores } from '../theme/appTheme'
import {  adjust, windowHeight } from '../utils/Dimentions'




export default function SignInHeader() {
    return (
        <View
        style={styles.container}
        >
            <Image
            source={require('../assets/img/medit.png')}
            style={styles.img}
          />
            <Text style={styles.titulo} >Iniciar Sesión</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    img:{
        width: '100%',
        height: windowHeight * 30 / 100,
        resizeMode: 'contain' ,
          
    },
    titulo:{
        // position:'absolute',
        fontSize: adjust(19) ,
        color:colores.blanco,
        bottom:20,
        left: 15,
        fontWeight:'bold'
    }
})