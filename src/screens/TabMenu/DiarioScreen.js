import React, {useContext, useEffect} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import BackgroundImage from '../../components/BackgroundImage';
import BtnFAB from '../../components/BtnFAB';
import DiarioEntradas from '../../components/Diario/DiarioEntradas';
import SinData from '../../components/SinData';
import Titulos from '../../components/Titulos';
import {AuthContext} from '../../context/AuthContext';
import { colores } from '../../theme/appTheme';
import { windowHeight } from '../../utils/Dimentions';


const DiarioScreen = ({navigation}) => {
    const {getData, entradas} = useContext(AuthContext);

    useEffect(() => {
        getData();
    }, []);


    const nuevaEntrada = () => {
        navigation.navigate('NuevaEntrada')
    }

    return (
        <View style={styles.contenedor}>
            <View style={styles.titulo}>
                <Titulos texto={'Diario de emociones'} />
            </View>

            

            {entradas.length == 0 ? (
                
                <SinData texto={'Aún sin registros'} />
               
            ) : (
                <DiarioEntradas entradas={entradas} navigation={navigation} />
            )}

          

            <BtnFAB nameIcon={'add'} nav={nuevaEntrada} />

        </View>
    );
};

export default DiarioScreen;

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor:colores.bgColor
    },
    titulo: {
        marginVertical: windowHeight * 3 / 100,
        zIndex: 99,
    },
    
});
