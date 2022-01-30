import moment from 'moment';
import 'moment/locale/es';

import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

import {Modal} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {FirstData} from '../../components/FirstData';
import FechaSelect from '../../components/Rueda/FechaSelect';
import Form from '../../components/Rueda/Form';
import RuedaVida from '../../components/Rueda/RuedaVida';
import Titulos from '../../components/Titulos';
import {RuedaContext} from '../../context/RuedaContext';

moment.locale('es');

const RuedaVidaScreen = () => {
    const [visible, setVisible] = useState(false);
    const [modalDescription, setModalDescription] = useState(false);
    const [view, setView] = useState(0);
    const [openBar, setOpenBar] = useState(false);
    const {ruedas, status, crearRueda,deleteRueda,upDateTodo} = useContext(RuedaContext);
    const [isUpdate, setIsUpdate] = useState(false);



    const showModal = () => setVisible(true);
    const hideModal = () => {
        setVisible(false);
        setOpenBar(false);
    };

    const guardarRueda = data => {
        Alert.alert(
            '¿Guardar?',
            '¿Estas seguro que desea guardar la Rueda de Vida?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('cancel'),
                    style: 'cancel',
                },
                {
                    text: 'Si',
                    onPress: () => {
                       if (isUpdate) {
                            hideModal();
                            setOpenBar(false);
                            upDateTodo({
                                ...data,
                                id:ruedas[view].id
                            })
                       } else {
                            hideModal();
                            setOpenBar(false);
                            crearRueda({
                                ...data,
                                fecha: moment().unix(),
                            });
                       }
                    },
                },
            ],
        );
    };

    const borrar = () => {
        const id = ruedas[view].id;
        Alert.alert(
            'Eliminar',
            '¿Estas seguro que desea guardar la Rueda de Vida?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Si',
                    onPress: () => {
                        setView(0);
                        setOpenBar(false);
                        deleteRueda(id);
                    },
                },
            ],
        );
        
    }

    const actualizarRueda = () => {
        setIsUpdate(true);
        showModal();
    }

    const nuevaRueda = ( ) => {
        
        setIsUpdate(false);
        showModal();

    }

    
    return (
        <View style={{flex: 1, width: '100%'}}>
            {!openBar ? (
                <View style={styles.cabecera}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Titulos texto={'Rueda de Vida'} />

                        <Icon
                            name="contact-support"
                            size={20}
                            onPress={() => setModalDescription(true)}
                        />
                    </View>
                    {
                        status === 'full' && (
                            <Icon
                                name={'more-vert'}
                                size={30}
                                onPress={() => setOpenBar(true)}
                            />
                        )
                    }
                    
                </View>
            ) : (
                <View style={styles.iconosContent}>
                    <Icon
                        name="delete"
                        size={25}
                        onPress={borrar}
                        style={styles.iconos}
                    />
                    <Icon
                        name="edit"
                        size={25}
                        onPress={actualizarRueda}
                        style={styles.iconos}
                    />
                    <Icon
                        name="add"
                        size={30}
                        onPress={nuevaRueda}
                        style={styles.iconos}
                    />
                    <Icon
                        name={'more-horiz'}
                        size={25}
                        onPress={() => setOpenBar(false)}
                    />
                </View>
            )}

            <View style={styles.container}>
                {status === 'full' ? (
                    <>
                        <FechaSelect ruedas={ruedas} setView={setView} />

                        <RuedaVida rueda={ruedas[view]} />
                    </>
                ) : (
                    <>
                        <FirstData
                            urlImg={require('../../assets/img/empty.png')}
                            btnText={'Crear Rueda de Vida'}
                            nav={nuevaRueda}
                        />
                    </>
                )}
            </View>

            <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={{
                    backgroundColor: 'white',
                }}>
                <Form 
                hideModal={hideModal} 
                guardarRueda={guardarRueda}  
                rueda={ !isUpdate ? null : ruedas[view]  }
                />
            </Modal>

            <Modal
                visible={modalDescription}
                onDismiss={() => setModalDescription(false)}
                contentContainerStyle={{
                    backgroundColor: 'white',
                    width: '90%',
                    alignSelf: 'center',
                    padding: 10,
                }}>
                <Text style={{fontSize: 15, color: 'black'}}>
                    La rueda de la vida es una técnica de autoanálisis de las
                    diversas áreas que componen nuestra vida, favoreciendo una
                    toma de conciencia acerca del momento vital en el que nos
                    encontramos y los aspectos en los que debemos trabajar y
                    mejorar para alcanzar una mayor satisfacción.
                </Text>
            </Modal>
        </View>
    );
};

export default RuedaVidaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cabecera: {
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        right: 5,
    },
    iconosContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 10,
    },
    iconos: {
        marginHorizontal: 15,
        marginTop: 5,
    },
    img: {
        height: 200,
        width: 200,
    },
    section: {
        flex: 1,
        
        alignItems: 'center',
    },
});
