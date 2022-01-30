import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {adjust, windowWidth} from '../../utils/Dimentions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colores} from '../../theme/appTheme';
import {frases} from '../../utils/Utilis';

export const Reflexion = () => {
    const [reflexion, setReflexion] = useState(0);

    const siguienteFrase = () => {
        if (reflexion >= frases.length - 1) {
            setReflexion(0);
            return;
        } else {
            setReflexion(reflexion + 1);
            return;
        }
    };

    return (
        <View style={styles.card} >
            <Image
                source={require('../../assets/img/nube.png')}
                style={{
                    width: (windowWidth * 40) / 100,
                    height: (windowWidth * 30) / 100,
                    position: 'absolute',
                    left: -40,
                    opacity: 0.16,
                    bottom:-20
                    
                }}
            />

            <Text
                style={{
                    fontSize: adjust(16),
                    color: colores.texto,
                    fontWeight: 'bold',
                }}>
                Reflexion del dia
            </Text>

            
            <View style={styles.cardContent}>
                <View style={{flexDirection: 'row', marginVertical: 15}}>
                    <Text style={styles.reflexion}>
                        "{frases[reflexion].frase}"
                    </Text>
                </View>

                <Text style={styles.autor}> - {frases[reflexion].autor}</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                <Button onPress={siguienteFrase}>
                    <Icon
                        name="navigate-next"
                        size={20}
                        color={colores.principal}
                    />
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        // marginVertical:20
        paddingVertical:10,
        paddingHorizontal:10
    },
    cardContent: {
        alignItems: 'center',
    },
    reflexionContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    reflexion: {
        fontSize: adjust(17),
        fontFamily: 'serif',
        color: colores.principal,
    },
    autor: {
        fontSize: adjust(16),
        color: colores.principal,
    },
});
