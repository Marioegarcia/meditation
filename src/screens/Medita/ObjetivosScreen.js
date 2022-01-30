import React, { useContext, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Modal, ToggleButton} from 'react-native-paper';
import { FormObjetivos } from '../../components/Objetivos/FormObjetivos';
import ObjetivosEstadistica from '../../components/Objetivos/ObjetivosEstadistica';
import ObjetivosLista from '../../components/Objetivos/ObjetivosLista';

import Titulos from '../../components/Titulos';

import { ObjetivosContext } from '../../context/ObjetivosContext';
import { windowWidth } from '../../utils/Dimentions';

const ObjetivosScreen = ({navigation}) => {
    const [value, setValue] = useState('left');
    
    const {objetivos} = useContext(ObjetivosContext);
    
  
    
    



    return (
        <View style={styles.container} >
            <View style={{marginVertical:10,marginHorizontal:15}}   >
            <Titulos texto={'Metas personales'} />
            </View>
            
            <View style={styles.cabecera}>
            
                <ToggleButton.Row
                    onValueChange={value => setValue(value)}
                    value={value}
                //    style={{backgroundColor:'blue'}}
                >
                    <ToggleButton
                        icon={() => <Text>Lista</Text>}
                        value="left"
                        style={{width:windowWidth * 0.45}}
                    />
                    <ToggleButton
                        icon={() => <Text>Estadisticas</Text>}
                        value="right"
                        style={{width:windowWidth * 0.45}}
                    />
                </ToggleButton.Row>
            </View>

            <View style={styles.seccion} >
                {
                    value === 'left' ? ( 
                        <>
                            <ObjetivosLista  navigation={navigation} />
                            
                        </>
                     
                    ) : (
                        <ObjetivosEstadistica/>
                    )
                }
            </View>

        </View>
    );
};

export default ObjetivosScreen;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    cabecera: {
        justifyContent: 'center',
        alignItems: 'center',
        width:windowWidth,
        marginTop:19,
        
    },
    seccion:{
        flex:1,
        marginHorizontal:20,
        marginVertical:20
    }
});
