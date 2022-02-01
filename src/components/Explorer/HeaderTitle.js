import moment from 'moment';
import React,{useContext} from 'react'
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
        <View style={styles.container} >
           <Text style={styles.titulo} >{mensaje} {nombre}</Text>
           <Text style={styles.subtitulos} >¿Cómo sientes el dia hoy?</Text>
            <AccesoDirecto/>
        </View>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'flex-start',
        paddingVertical:10,
        paddingHorizontal:10
    },
    titulo: {
        fontSize:adjust(32),
        fontWeight:'bold',
        color:colores.principal
    },
    subtitulos:{
        fontSize:adjust(18),
        color:colores.principal
    }
})
