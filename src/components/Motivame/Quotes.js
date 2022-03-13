import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { adjust } from '../../utils/Dimentions';

export const Quotes = () => {
    const [count, setCount] = useState(0);
    const {citas,citasGet} = useContext(AuthContext);

    
    const siguienteCita = () => {
        setCount( count + 1 );
      
        if (count > 5) {
            setTimeout(() => {
                setCount(0)
            }, 60000);
        } else {
            citasGet();
        }
       
    }
  return (
    <View style={styles.content} >
      <Text style={styles.quotes} >{citas.nota}</Text>
      <Text style={styles.autor} >- {citas.autor}</Text>

      
    </View>
  )
}


const styles = StyleSheet.create({
    content:{
        marginHorizontal:20,
        // justifyContent:'center',
        // alignItems:'center'
    },
    quotes:{
        fontSize:adjust(27),
        color:'black',
        fontFamily:'CallingCode-Regular',
        // fontFamily:'MontereyFLF'
        // fontWeight:'500'
    },
    autor:{
        fontSize:adjust(20),
        color:'black',
        fontFamily:'CallingCode-Regular',
        top:30
    }
})