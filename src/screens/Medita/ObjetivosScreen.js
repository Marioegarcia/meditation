import React, { useContext } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import ObjetivosEstadistica from '../../components/Objetivos/ObjetivosEstadistica';
import ObjetivosLista from '../../components/Objetivos/ObjetivosLista';

import Titulos from '../../components/Titulos';

import { ObjetivosContext } from '../../context/ObjetivosContext';
import { windowWidth } from '../../utils/Dimentions';

const ObjetivosScreen = () => {
    const [value, setValue] = React.useState('left');

    
    return (
        <View style={styles.container} >
            <Titulos texto={'Objetivos'} />

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
                    value === 'left' ? ( <ObjetivosLista/> ) : (<ObjetivosEstadistica/>)
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
        // backgroundColor:'red'
    },
    seccion:{
        flex:1,
        marginHorizontal:20,
        marginVertical:20
    }
});
