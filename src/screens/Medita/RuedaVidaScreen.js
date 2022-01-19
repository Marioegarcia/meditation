import moment from 'moment';
import 'moment/locale/es';

import React, {useContext, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,

} from 'react-native';

import { Modal,List} from 'react-native-paper';


import Icon from 'react-native-vector-icons/MaterialIcons';
import FirstData from '../../components/FirstData';
import Form from '../../components/Rueda/Form';
import RuedaVida from '../../components/Rueda/RuedaVida';
import Titulos from '../../components/Titulos';
import { RuedaContext } from '../../context/RuedaContext';


moment.locale('es');

const RuedaVidaScreen = () => {
    const [visible, setVisible] = useState(false);
    const [modalDescription, setModalDescription] = useState(false);
    const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
    const {ruedas,status,crearRueda} = useContext(RuedaContext)
 
    
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    console.log(status);

    const guardarRueda = (data) => {
     
       
        Alert.alert(
            '¿Guardar?',
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
                        hideModal();
                        
                       
                            crearRueda({
                                ...data,
                                fecha: moment().unix(),
                            });
                        
                       
                        
                    },
                },
            ],
        );
    };

    return (
        <View style={{flex: 1, width: '100%'}}>
            <View style={styles.cabecera}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Titulos texto={'Rueda de Vida'} />
                    <Icon
                        name="contact-support"
                        size={20}
                        onPress={() => setModalDescription(true)}
                    />
                </View>

                <Icon name="add" size={30} onPress={showModal} />
            </View>


            <View style={styles.container}>
                {
                    status === 'full' ? (
                        <>
                        

                            <RuedaVida rueda={ruedas[0]} />
                        </>
                        

                    ) : (
                        <>

                            <FirstData 
                            urlImg={require('../../assets/img/todo.png')} 
                            btnText={'Crear Rueda de Vida'}
                            nav={showModal}
                            />

                        </>
                    )
                }
               

            </View>

            <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={{
                    backgroundColor: 'white',
                }}>
                    <Form hideModal={hideModal} guardarRueda={guardarRueda}  />
               
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        right: 5,
    },
    img: {
        height: 200,
        width: 200,
    },
    section: {
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center',
    },
   
});
