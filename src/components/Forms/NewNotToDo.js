import moment from 'moment';
import React, { useContext } from 'react';
import {Image, ScrollView, StyleSheet, Text, View,Alert} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import { TaskContext } from '../../context/TaskContext';
import {useForm} from '../../hooks/useForm';
import { colores } from '../../theme/appTheme';

import {windowWidth} from '../../utils/Dimentions';
import ControlInput from '../Diario/ControlInput';


const NewNotToDo = ({navigation,route}) => {
    const {data} = route.params;

    
    const {
        crearNotTask,
        upDateTodo,
        } = useContext(TaskContext)

    const {form, onChange} = useForm({
        todo: !data ? '' : data.todo,
        tipo: !data ? 0 : data.tipo,
        fecha:!data ? 0 : data.fecha,
        done: !data ? 0 : data.done
    });

   

    const tipoTarea = [
        {
            id: 1,
            valor: 0,
            titulo: 'Cosas que te hacen perder el tiempo.',
            bg: '#f9e495',
            img: require('../../assets/img/reloj-de-arena.png'),
        },
        {
            id: 2,
            valor: 1,
            titulo: 'Cosas que te estresan.',
            bg: '#4690d4',
            img: require('../../assets/img/estres.png'),
        },
        {
            id: 3,
            valor: 2,
            titulo: 'Cosas que te drenan tu energia.',
            bg: '#f9e495',
            img: require('../../assets/img/drenar.png'),
        },
        {
            id: 4,
            valor: 3,
            titulo: 'Cosas que te sientes obligada/o a hacer.',
            bg: '#4690d4',
            img: require('../../assets/img/bola.png'),
        },
        {
            id: 5,
            valor: 4,
            titulo: 'Cosas que no tienen que hacerse.',
            bg: '#f9e495',
            img: require('../../assets/img/nohacer.png'),
        },
        {
            id: 6,
            valor: 5,
            titulo: 'Cosas que no puedes controlar.',
            bg: '#4690d4',
            img: require('../../assets/img/nube.png'),
        },
    ];


    const enviarTarea =  () => {
        const {todo,tipo} = form;
        
        if (todo.trim() === '' ) {
            Alert.alert('Faltan datos por rellenar.');
        } else {
            
            if (!data) {
            
                crearNotTask({
                    ...form,
                    fecha: moment().unix(),
                    done:0
                });

               
               
            } else {
                const {id} = data;
                // console.log({id,todo,tipo});
                upDateTodo(id,todo,tipo)
               
            }
            
            
            
            navigation.navigate('NotToDoScreen');
            
            // navigation.pop()
        }
    };

    return (
        <View>
            <ScrollView>
                <View style={styles.inputs}>
                    <Text  style={{color:colores.principal}}>Tarea:</Text>
                    <ControlInput
                        onChange={onChange}
                        input={'todo'}
                        value={form.todo}
                        lines={1}
                    />
                </View>
                <View style={styles.tipos}>
                    <Text  style={{color:colores.principal}}>Tipo de tarea</Text>
                    <RadioButton.Group
                        onValueChange={newValue => onChange(newValue, 'tipo')}
                        value={form.tipo}>
                        {tipoTarea.map(tarea => (
                            <View
                                key={tarea.id}
                                style={[
                                    styles.radiobtn,
                                    {backgroundColor: tarea.bg},
                                ]}>
                                <View style={styles.contentImg}>
                                    <Image
                                        source={tarea.img}
                                        style={styles.img}
                                    />
                                </View>

                                <View
                                    style={{justifyContent: 'center', width: windowWidth * 0.7,}}>
                                    <RadioButton.Item
                                        labelStyle={styles.btnRadio}
                                        label={tarea.titulo}
                                        value={tarea.valor}
                                    />
                                </View>
                            </View>
                        ))}
                    </RadioButton.Group>
                </View>
                <View 
                style={{
                    alignItems:'center',
                    justifyContent:'center'}} >
                    <Button mode='outlined' onPress={enviarTarea}>Guardar Tareas</Button>
                </View>
                
            </ScrollView>
        </View>
    );
};

export default NewNotToDo;

const styles = StyleSheet.create({
    inputs: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    tipos: {
        marginHorizontal: 10,
        marginVertical: 4,
    },
    radiobtn: {
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        // width:windowWidth * 0.8
    },
    contentImg: {
        height: windowWidth * 0.16,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: '90%',
        width: 55,
        margin: 1,
    },
    btnRadio: {
        fontWeight: 'bold',
        color: '#21262f',
        fontFamily: 'sans serif',
    },
});
