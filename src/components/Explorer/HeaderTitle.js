import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React,{useContext,useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {AuthContext} from '../../context/AuthContext';
import { useFecha } from '../../hooks/useFecha';
import { colores } from '../../theme/appTheme';

import { adjust } from '../../utils/Dimentions';
import { AccesoDirecto } from './AccesoDirecto';


const HeaderTitle = () => {
    const {nombre} = useContext(AuthContext);
    const {mensaje} = useFecha();


    return (
        <>
            <View style={styles.container} >
                <Text style={styles.titulo} >{mensaje} {nombre}</Text>
                <Text style={styles.subtitulos} >¿Cómo sientes hoy?</Text>
                
            </View>
            <AccesoDirecto/>
        </>

    )
}

export default HeaderTitle

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingVertical:10,
        paddingHorizontal:10,
        marginVertical:10
    },
    titulo: {
        fontSize:adjust(20),
        fontWeight:'bold',
        color:colores.principal
    },
    subtitulos:{
        fontSize:adjust(16),
        color:colores.principal
    }
})
