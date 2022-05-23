import React, { useContext, useState } from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


import {adjust} from '../../utils/Dimentions';
import { colores } from '../../theme/appTheme';
import { useForm } from '../../hooks/useForm';
import { ObjetivosContext } from '../../context/ObjetivosContext';


export const FormObjetivos = ({navigation,item}) => {
    const {crearObjetivo,updateobjetivo} = useContext(ObjetivosContext);
    
    const {form,onChange} = useForm({
        titulo:  item ? item.titulo : '',
        ambito:  item ? item.ambito : 'Selecciona una categoria',
        finObjetivo: item ? moment.unix(item?.finObjetivo).toDate() : new Date(),
        codigo: item && item.codigo,
    })
    
    const [date, setDate] = useState(form.finObjetivo);

    const categorias = [
        'Familia',
        'Salud',
        'Amistad',
        'Trabajo o Estudio', 
        'Amor y Sexo',
        'Economía',
        'Espiritual',
        'Crecimiento Personal'
    ];

    const [showDate, setShowDate] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(Platform.OS === 'ios');
        setDate(currentDate);
        onChange(currentDate,'finObjetivo')
        
    };

    
    const goBackScreen = () => {
        navigation.goBack();
    }
    const showDatepicker = () => {
        setShowDate(true)
    };


    
    const guardarObjetivo = () => {
        const {titulo,ambito,finObjetivo,codigo} = form;
        
       
       
        if (titulo.trim() === '' || ambito.trim() === '' || finObjetivo === 0 ) {
            
            Alert.alert(
                'Faltan Campos',
                'Rellena todos los campos.',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log('Cancel Pressed'),
                    },
                ],
            );
        }else{
            Alert.alert(
                '¿Guardar?',
                '¿Estas seguro que deseas guardar tu Objetivo?',
                [
                    {
                        text: 'Cancelar',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Si',
                        onPress: () => {
                            if (!item) {
                                crearObjetivo({
                                    titulo,
                                    ambito : categorias[codigo],
                                    finObjetivo:moment(finObjetivo).unix(),
                                    done:0,
                                    codigo
                                })
                            } else {
                                updateobjetivo({
                                    ...form,
                                    id: item.id,
                                    finObjetivo:moment(finObjetivo).unix(),
                                    ambito : categorias[codigo],
                                })
                            }                         
                            goBackScreen();
                            
                        }
                    },
                ],
            );
        }

    }

    return (
        <View style={styles.container}>
            
            
            <View style={styles.form}>
                <View style={{backgroundColor:'white'}} >

                    <Text style={styles.label} >Objetivo:</Text>
                   
                    <TextInput
                    mode="outlined"
                    // placeholder="Nuevo objetivo"
                    value={form.titulo}
                    onChangeText={(value) => onChange( value, "titulo" )}
                    
                    activeOutlineColor={colores.pinkLight}
                    outlineColor={'pink'}
                    style={styles.inputs}
                    selectionColor='pink'
                    /> 

                    <Text style={styles.label} >Categoria de objetivo:</Text>
                    <SelectDropdown
                        data={categorias}
                        defaultValue={ form.ambito }
                        onSelect={ (selectedItem, index) => {
                            // changeAmbito(selectedItem, index);
                            onChange(index,'codigo');
                        }}
                        
                        buttonStyle={styles.dropdown3BtnStyle}
                        renderCustomizedButtonChild={(selectedItem, index) => {
                            
                            return (
                                <View style={styles.dropdown3BtnChildStyle}>
                                
                                <Text style={styles.dropdown3BtnTxt}>
                                    {selectedItem ?  selectedItem : 'Selecciona una categoria'  }
                                </Text>
                                <Icon name='expand-more' size={20} />
                                </View>
                            );
                        }}
                    />

                    
                    <View style={{marginTop:28,justifyContent:'center',alignItems:'center'}} >
                        <Text style={styles.label} >Fecha:</Text>
                        <View  >
                            
                            <Button mode='outlined' onPress={showDatepicker}> {moment(date).format('LL')} </Button>
                        </View>
                        
                        {showDate && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={onChangeDate}
                            minimumDate={new Date()}
                            textColor='red'
                            />
                        )}
                    </View>
                </View>

               

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}>
                    <Button
                        style={{marginVertical: 10}}
                        mode="outlined"
                        onPress={goBackScreen}>
                        Cancelar
                    </Button>

                    <Button
                        style={{marginVertical: 10}}
                        mode="contained"
                        onPress={guardarObjetivo}
                    >
                       { !item ? 'Guardar' : 'Actualizar'} 
                    </Button>
                    
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        height: '100%',
        justifyContent:'center',
       
        
    },
    form: {
      
        marginHorizontal: 20,
        // alignItems:'center',
        justifyContent: 'space-around',
        flex: 1,
    },
    label: {
        fontSize: adjust(13),
        color:colores.purpleBG
    },
    inputs: {
        backgroundColor: 'white',
        // marginBottom: 10,
        // height: 42,
        borderRadius:30,
        
    },
    dropdown3BtnStyle:{
        width: "100%",
        // height: 42,
        backgroundColor: "#FFF",
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colores.pinkLight,

    },
    dropdown3BtnChildStyle:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
    },
    dropdown3BtnTxt: {
        color: "#444",
        textAlign: "center",
        // fontWeight: "bold",
        fontSize: adjust(12),
        marginHorizontal: 12,
    }

});
