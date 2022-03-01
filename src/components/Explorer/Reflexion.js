import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';

import {adjust, windowWidth} from '../../utils/Dimentions';

import {colores} from '../../theme/appTheme';

import { AuthContext } from '../../context/AuthContext';

export const Reflexion = React.memo(() => {
    
    const {citas} = useContext(AuthContext)
    

    return (
        <View style={styles.card} >
            <Image
                source={require('../../assets/img/nube.png')}
                style={styles.img}
            />

            <Text
                style={styles.titulo}>
                Reflexion del dia
            </Text>

            
            <View style={styles.cardContent}>
                <View style={{flexDirection: 'row', marginVertical: 15}}>
                    <Text style={styles.reflexion}>
                        "{ citas.nota }"
                    </Text>
                </View>

                <Text style={styles.autor}> - {citas.autor}</Text>
            </View>

           
        </View>
    );
})

const styles = StyleSheet.create({
    card:{
        // marginVertical:20
        paddingVertical:10,
        paddingHorizontal:7,
       
    },
    cardContent: {
        alignItems: 'center',
    },
    titulo:{
        fontSize: adjust(16),
        color: colores.texto,
        fontWeight: 'bold',
    },
    reflexion: {
        fontSize: adjust(17),
        fontFamily: 'serif',
        color: colores.principal,
        
    },
    img:{
        width: (windowWidth * 40) / 100,
        height: (windowWidth * 30) / 100,
        position: 'absolute',
        left: -40,
        opacity: 0.16,
        bottom:-20
        
    },
    autor: {
        fontSize: adjust(16),
        color: colores.principal,
    },
});
