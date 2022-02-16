import React, {useContext, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    BackHandler,
    Alert,
} from 'react-native';
import {  RadioButton } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {ObjetivosContext} from '../../context/ObjetivosContext';
import { useFecha } from '../../hooks/useFecha';
import { colores } from '../../theme/appTheme';
import { adjust, normalize } from '../../utils/Dimentions';

const ItemObjetivo = ({item, show, setShow,openUpdate}) => {
    const {titulo, id, finObjetivo, done, ambito,codigo} = item;
    const {eliminarObjetivo,updateDone} = useContext(ObjetivosContext);
    const {formatFecha} = useFecha()
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
            
             updateDone(id,1)
         } else {
            updateDone(id,0)
         }
         
         
    }
    

    const ambitoBG = [
        colores.familia,
        colores.salud,
        colores.amistad,
        colores.trabajo,
        colores.amor,
        colores.economia,
        colores.espiritual,
        colores.crecimiento
    ]
    
    

    return (
        <>

            
            <TouchableOpacity
                onLongPress={() => onPressSelect(id)}
                activeOpacity={0.5}
                style={[
                    styles.container,
                    show === id && {
                        backgroundColor: '#e2e3dd',
                        borderRadius:0,
                        borderRadius:0,
                        borderWidth:0,
                        marginTop:15
                    },
                ]}>

                
                
                <View style={styles.content}>
                    <View style={{ alignItems: 'center',justifyContent: 'center' }}>
                
                        <RadioButton
                        status={checked[item.done]}

                        onPress={cambioTarea}
                        />
                      
                    </View>
                    <View style={{flex:1,marginHorizontal:2}} >
                        <Text style={[
                        styles.objTexto,
                        done === 1 && {
                            textDecorationLine: 'line-through',
                            // textDecorationColor: 'red',
                            // textDecorationStyle:'double',
                            fontWeight:'400',
                            fontStyle:'italic'
                        }
                        ]}>
                            
                            {titulo}
                        </Text>
                    </View>
                    
                    <View style={{marginHorizontal:5}} >
                        <Text style={styles.fecha} >Fin: {formatFecha(finObjetivo, 'DD.MM.YY') }</Text>
                    </View>

                </View>

                <View style={{alignItems:'flex-end',marginHorizontal:5}}
                >
                        

                        <Text style={{
                            ...styles.ambito,
                            backgroundColor: ambitoBG[codigo]}} 
                        > 
                            {ambito}
                        </Text>
                </View>

                
                
            </TouchableOpacity>
            {show === id && (
                    <View style={styles.actionIcon}>
                        <TouchableOpacity
                            onPress={messageDelete}
                            style={styles.btn}>
                            <Icon name="delete" size={30} color={'#d90368'} />
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=> openUpdate(item) }
                        style={styles.btn}
                        >
                            <Icon name="edit" size={30} color={'#007ea7'} />
                        </TouchableOpacity>
                    </View>
            )}
        </>
    );
};

export default ItemObjetivo;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal:4,
        paddingVertical:16,
        borderWidth: 0.8,
        borderColor: colores.principal,
        flexWrap: 'wrap',
        justifyContent:'space-between',
        
    },
    content: {
        marginVertical: 1,
        flexDirection:'row',
        
    },
    objTexto:{
        fontSize: adjust(15),
        fontWeight:'bold',
        color:colores.principal
    },
    fecha:{
        fontSize: adjust(11),
        fontWeight:'bold'
    },
    ambito:{
        fontSize: adjust(11),
        fontWeight:'bold',
        color:'black',
        borderRadius:5,
        padding:2,
        opacity:0.5
    },    
    actionIcon: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#e2e3dd',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
       
    },
    btn: {
        marginHorizontal: 15,
        // borderWidth:0.s5,
        borderRadius:4,
        borderColor:colores.secundario,
        // backgroundColor:colores.secundario,
        // paddingHorizontal:6
    },
});
