import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ObjetivosContext } from '../../context/ObjetivosContext'
import ItemObjetivo from './ItemObjetivo'
import {FirstData} from '../FirstData';
;


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
           


            {
                !objetivos ? (
                    <FirstData 
                    urlImg={require('../../assets/img/empty.png')}
                    btnText='Crear nuevo objetivo'
                    nav={()=>console.log('nuevo objetivo')}
                    />
                ) : (
                    <>
                        <Text>ListaObjetivos</Text>
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
