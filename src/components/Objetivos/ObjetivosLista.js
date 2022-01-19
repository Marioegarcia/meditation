import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ObjetivosContext } from '../../context/ObjetivosContext'
import ItemObjetivo from './ItemObjetivo'

const ObjetivosLista = () => {
    const {objetivos,status,crearObjetivo} = useContext(ObjetivosContext)

    console.log(objetivos);
    const ambitos = [
        'Crecimiento personal',
        'Familia',
        'Salud',
        'Amistad',
        'Trabajo o estudios',
        'Amor y sexo',
        'Economía',
        'Espiritual',
    ];



    return (
        <View style={styles.body} >
            <Text>ListaObjetivos</Text>

            
            {
                !objetivos ? (
                    <Text>Crear</Text>
                ) : (
                    <>
                    <FlatList
                    data={objetivos}
                    renderItem={({item})=> <ItemObjetivo item={item} /> }
                    keyExtractor={(item) => item.id}
                    />
                    </>
                )
            }
                
            
            
        </View>
    )
}

export default ObjetivosLista

const styles = StyleSheet.create({
    body:{
        // flex:1,
        
    }
})
