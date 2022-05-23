import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { adjust } from '../../utils/Dimentions';

export const Quotes = ({cita}) => {
   
    return (
    <View style={styles.content} >
        <Text style={styles.quotes} >{cita?.nota}.</Text>
        <Text style={styles.autor} >- {cita?.autor}</Text>

      
    </View>
  )
}


const styles = StyleSheet.create({
    content:{
        marginHorizontal:20,
    },
    quotes:{
        fontSize:adjust(25),
        color:'black',
        fontFamily:'CallingCode-Regular',
        textAlign:'auto'
    },
    autor:{
        fontSize:adjust(20),
        color:'black',
        fontFamily:'CallingCode-Regular',
        top:30
    }
})