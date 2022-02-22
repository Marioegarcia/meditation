import React, {useContext, useState} from 'react';
import {FlatList, StyleSheet,  View} from 'react-native';
import {ObjetivosContext} from '../../context/ObjetivosContext';
import ItemObjetivo from './ItemObjetivo';
import {FirstData} from '../FirstData';
import BtnFAB from '../BtnFAB';
import { Button } from 'react-native-paper';





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
                        ListFooterComponent={(
                            <View style={{height:80}} />
                        )}
                        showsVerticalScrollIndicator={false}
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
