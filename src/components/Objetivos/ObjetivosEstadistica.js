import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ObjetivosContext } from '../../context/ObjetivosContext';

const ObjetivosEstadistica = () => {
    const {objetivos} = useContext(ObjetivosContext);
    console.log(objetivos);
    
    return (
        <View>
            <Text>Objetivos Estadistica</Text>
        </View>
    )
}

export default ObjetivosEstadistica

const styles = StyleSheet.create({})
