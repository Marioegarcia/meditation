import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View} from 'react-native';
import {ObjetivosContext} from '../../context/ObjetivosContext';
import ItemObjetivo from './ItemObjetivo';
import {FirstData} from '../FirstData';
import BtnFAB from '../BtnFAB';
import BarraNotToDo from '../NotToDo/BarraNotToDo';
import { Modal, Title } from 'react-native-paper';
import { FormObjetivos } from './FormObjetivos';
import { windowHeight } from '../../utils/Dimentions';




const ObjetivosLista = ({navigation}) => {
    const {status,objetivos} = useContext(ObjetivosContext);
    const [show, setShow] = useState(null);
   



    const goForm = () => {
        navigation.navigate('ObjetivoFormScreen');
    }

    
    const openUpdate = (item) => {
        navigation.navigate('ObjetivoFormScreen',item);
        
    }


    return (
        <View style={styles.body}>
            {status !== 'full' ? (
                <>
                <FirstData
                    urlImg={require('../../assets/img/empty.png')}
                    btnText="Crear nuevo objetivo"
                    nav={goForm}
                />

            
                </>
                
            ) : (
                <>
                    <FlatList
                        data={objetivos}
                        renderItem={({index,item}) => (
                           <ItemObjetivo 
                           item={item} 
                           show={show} 
                           setShow={setShow} 
                           index={index} 
                           openUpdate={openUpdate} 
                           />  
                        )}
                        keyExtractor={item => item.id}
                    />
                    
                    <BtnFAB nameIcon='add' nav={goForm} />
                    
                </>
            )}

            
            
        </View>
    );
};

export default ObjetivosLista;

const styles = StyleSheet.create({
    body: {
        flex:1,
    },
});
