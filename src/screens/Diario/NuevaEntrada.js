import moment from 'moment';
import React, {useContext, useState} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

import BackgroundImage from '../../components/BackgroundImage';
import ControlEmociones from '../../components/Diario/ControlEmociones';
import ControlInput from '../../components/Diario/ControlInput';
import {AuthContext} from '../../context/AuthContext';
import {useForm} from '../../hooks/useForm';
import {windowWidth} from '../../utils/Dimentions';
import ItemSlide from './ItemSlide';

const NuevaEntrada = ({navigation}) => {
    const {insertData, getData} = useContext(AuthContext);
    const [activeIndex, setActiveIndex] = useState(0);

    const {form, onChange} = useForm({
        situacion: '',
        pensamiento: '',
        emocion: 0,
        respuesta: '',
        sugerencia: '',
        fecha: 0,
    });

    const guardarEntrada = () => {
        const {situacion, pensamiento, emocion, respuesta, sugerencia} = form;

        if (
            situacion.trim() === '' ||
            respuesta.trim() === '' ||
            pensamiento.trim() === '' ||
            respuesta.trim() === '' ||
            sugerencia.trim() === ''
        ) {
            Alert.alert('Faltan datos por rellenar.');
        } else {
            insertData({
                situacion,
                pensamiento,
                emocion,
                respuesta,
                sugerencia,
                fecha: moment().unix(),
            });

            // setEntrada('');
            // setTitulo('');
            getData();
            navigation.goBack();
        }
    };

    const items = [
        {
            component: <ControlInput onChange={onChange} input="situacion" />,
            ask: '¿Que ocurrio?',
            title: 'Situacion',
            id: 1,
        },
        {
            component: <ControlInput onChange={onChange} input="pensamiento" />,
            ask: '¿Que piensas de lo ocurrido?',
            title: 'Pensamiento',
            id: 2,
        },
        {
            component: <ControlEmociones onChange={onChange} input="emocion" />,
            ask: '¿Como te sientes?',
            title: 'Emoción',
            id: 3,
        },
        {
            component: <ControlInput onChange={onChange} input="respuesta" />,
            ask: '¿Como reacciónaste a lo ocurrido?',
            title: 'Respuesta',
            id: 4,
        },
        {
            component: <ControlInput onChange={onChange} input="sugerencia" />,
            ask: '¿Que indica esta emoción?',
            title: 'Sugerencia',
            id: 5,
        },
    ];

    return (
        <View style={{flex: 1}}>
            <BackgroundImage />
            <ScrollView>
                <Carousel
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={item => ItemSlide(item, onChange)}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    firstItem={activeIndex}
                    layout="default"
                    onSnapToItem={index => {
                        setActiveIndex(index);
                    }}
                />
            </ScrollView>
            <View style={styles.btnBottom}>
                {activeIndex !== 0 ? (
                    <Button
                        mode="outlined"
                        onPress={() =>
                            activeIndex !== 0 && setActiveIndex(activeIndex - 1)
                        }>
                        Atras
                    </Button>
                ) : (
                    <View />
                )}

                {activeIndex === 4 ? (
                    <Button mode="contained" onPress={guardarEntrada}>
                        Guardar
                    </Button>
                ) : (
                    <Button
                        mode="contained"
                        onPress={() =>
                            activeIndex < 4 && setActiveIndex(activeIndex + 1)
                        }>
                        Siguiente
                    </Button>
                )}
            </View>
        </View>
    );
};

export default NuevaEntrada;

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#EFF8FF',
    },
    btnBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 22,
    },
});
