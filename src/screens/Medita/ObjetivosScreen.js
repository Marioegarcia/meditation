import React, {  useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ToggleButton} from 'react-native-paper';


import ObjetivosEstadistica from '../../components/Objetivos/ObjetivosEstadistica';
import ObjetivosLista from '../../components/Objetivos/ObjetivosLista';

import Titulos from '../../components/Titulos';
import { colores } from '../../theme/appTheme';

import { adjust, windowWidth } from '../../utils/Dimentions';

const ObjetivosScreen = ({navigation}) => {
    const [value, setValue] = useState('left');
    

    
  
    
    



    return (
        <View style={styles.container} >
            <View style={{marginVertical:10,marginHorizontal:15}}   >
            <Titulos texto={'Metas personales'} />
            </View>
            
            <View style={styles.cabecera}>
            
                <ToggleButton.Row
                    onValueChange={value => setValue(value)}
                    value={value}

                >
                    <ToggleButton
                        icon={() => <Text style={styles.textoToggle} >Lista</Text>}
                        value="left"
                        style={{width:windowWidth * 0.45}}
                    />
                    <ToggleButton
                        icon={() => <Text style={styles.textoToggle} >Estadisticas</Text>}
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
    },
    textoToggle:{
        fontSize: adjust(16),
        color:colores.principal
    }
});
