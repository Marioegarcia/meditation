import {View, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';


import { adjust } from '../../utils/Dimentions';
import { Temporizador } from './Temporizador';




export const Tiempo = () => {

    const [temporizador, setTemporizador] = useState(0);
  
    

   
 
    return (
        <View style={styles.container} >

            <View style={styles.contadorContent} >
                <Countdown 
                date={Date.now() + temporizador * 60000 } 
                renderer={(props)=> <Temporizador setTemporizador={setTemporizador}  {...props} /> } 
                autoStart={false}
                zeroPadTime={3}
                
                />
            </View>
            
           
           
          

            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        // backgroundColor:'blue'
    },
    contadorContent:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    contador:{
        fontSize: adjust(55),
        color:'black'
    },
    temporizador: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    inp:{
        marginHorizontal:4,
        alignItems:'center'
    }
});
