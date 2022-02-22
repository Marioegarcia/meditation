import React, {useContext, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    BackHandler,
    Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {ObjetivosContext} from '../../context/ObjetivosContext';
import {useFecha} from '../../hooks/useFecha';
import {colores} from '../../theme/appTheme';
import {adjust} from '../../utils/Dimentions';

const ItemObjetivo = ({item, show, setShow, openUpdate}) => {
    const {titulo, id, finObjetivo, done, ambito, codigo} = item;
    const {eliminarObjetivo, updateDone} = useContext(ObjetivosContext);
    const {formatFecha} = useFecha();
    const checked = ['unchecked', 'checked'];

    const messageDelete = () => {
        Alert.alert(
            'Eliminar objetivo',
            '¿Estas seguro que quieres eliminar tu objetivo?',
            [
                {
                    text: 'No',
                    onPress: () => null,
                    style: 'cancel',
                },
                {text: 'Si', onPress: () => eliminarObjetivo(id)},
            ],
        );
    };

    const onPressSelect = id => {
        setShow(id);
    };
    const backAction = () => {
        setShow(null);
        return true;
    };

    useEffect(() => {
        if (show !== null) {
            BackHandler.addEventListener('hardwareBackPress', backAction);
        }

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, [show]);

    const cambioTarea = () => {
        if (done === 0) {
            updateDone(id, 1);
        } else {
            updateDone(id, 0);
        }
    };

    const ambitoBG = [
        colores.familia,
        colores.salud,
        colores.amistad,
        colores.trabajo,
        colores.amor,
        colores.economia,
        colores.espiritual,
        colores.crecimiento,
    ];

    return (
        <>
            <TouchableOpacity
                onLongPress={() => onPressSelect(id)}
                activeOpacity={0.5}
                style={[
                    styles.container,
                    show === id && {
                        backgroundColor: '#e2e3dd',
                        borderRadius: 5,
                        borderWidth: 0,
                        // marginTop: 15,
                    },
                ]}>
                <View style={styles.content}>
                    <View style={{flex:1}} >

                        <RadioButton
                            status={checked[item.done]}
                            onPress={cambioTarea}
                            uncheckedColor={colores.principal}
                            color={colores.purpleBG}
                            
                        />

                    </View>
                    <View style={{ flex:4, justifyContent:'center'}}>
                        <Text
                        style={[
                                    styles.objTexto,
                                    done === 1 && {
                                        textDecorationLine: 'line-through',
                                        // textDecorationColor: 'red',
                                        // textDecorationStyle:'double',
                                        fontWeight: '400',
                                        fontStyle: 'italic',
                                        opacity:0.3
                                    },
                        ]}>
                            {titulo}
                        </Text>
                    </View>

                    <View style={{flex:1}} >
                        <Text style={styles.fecha}>
                            Fin: {formatFecha(finObjetivo, 'DD.MM.YY')}
                        </Text>
                    </View>
                </View>

                <View style={styles.ambito}>
                        
                    <View style={{backgroundColor: ambitoBG[codigo],width:10,height:'40%',margin:3,borderRadius:100}} />
                    <Text
                        style={[styles.ambitoTxt,{color:ambitoBG[codigo]}]}>
                        {ambito}
                    </Text>

                    
                </View>
                {show === id && (
                        <View style={styles.actionIcon}>
                            <TouchableOpacity
                                onPress={messageDelete}
                                style={styles.btn}>
                                <Icon name="delete" size={30} color={'#d90368'} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => openUpdate(item)}
                                style={styles.btn}>
                                <Icon name="edit" size={30} color={'#007ea7'} />
                            </TouchableOpacity>
                        </View>
                    )}
            </TouchableOpacity>
            
        </>
    );
};

export default ItemObjetivo;

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        marginVertical: 2,
        paddingVertical: 6,
        borderWidth: 0.5,
        borderColor: '#ebebeb',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor:colores.bgLight

    },
    content: {
        flexDirection: 'row',
        // alignItems:'center'
    },
    objTexto: {
        fontSize: adjust(15),
        fontWeight: 'bold',
        color: colores.principal,
    },
    fecha: {
        fontSize: adjust(11),
        fontWeight: 'bold',
        color:colores.principal
    },
    ambito: {
        marginHorizontal: 5,
        marginTop:3,
        borderRadius: 3,
        padding: 2,
        // opacity: 0.5,
        alignItems:'center',
        justifyContent:'flex-end',
        flexDirection:'row',
       
    },
    ambitoTxt:{
        fontSize: adjust(11),
        fontWeight: 'bold',
       
    },
    actionIcon: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
        
    },
    btn: {
        marginHorizontal: 15,
        borderRadius: 4,
        borderColor: colores.secundario,
        
    },
});
