import React,{useCallback, useContext, useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import {Caption} from 'react-native-paper';


import BarraNotToDo from '../../components/NotToDo/BarraNotToDo';
import BtnFAB from '../../components/BtnFAB';
import {ItemNotToDo} from '../../components/NotToDo/ItemNotToDo';
import { TaskContext } from '../../context/TaskContext';

import {useNoToDo} from '../../hooks/useNoToDo';
import {windowWidth} from '../../utils/Dimentions';
import { LoadingScreen } from '../LoadingScreen';
import FirstData from '../../components/FirstData';

const NotToDoScreen = ({navigation}) => {
    const [cambioColor, setCambioColor] = useState('')
    const {
        newTodo,
        cambioTarea,
        openBarra,
        selection,
        data,
        goBack,
        deleteItem,
        updateItem,
       
    } = useNoToDo(navigation)

    const {noToDo,status} = useContext(TaskContext)

    if(status === 'checking') return <LoadingScreen/>


    // console.log(data);
    return (
        <View style={styles.container}>
            
            <View style={styles.cabecera}>
            {
                !selection ? (
                    <View style={{justifyContent: 'center',
                    alignItems: 'center',}}>
                
                        <Text style={styles.todo}>
                            My Not To-Do
                            <Text style={styles.list}> List </Text>
                        </Text>
                        <Caption style={styles.subtitulo}>
                            Anota aqui todo lo que no harás pase lo que pase
                        </Caption>
                    </View>
                ) : (
                    
                    <BarraNotToDo 
                    data={data} 
                    goBack={goBack}
                    deleteItem={deleteItem}
                    updateItem={updateItem} 
                    setCambioColor={setCambioColor}
                    />
                )
            }
            </View>
            

           

            {status === 'void' ? (
                <>

                    <FirstData
                    urlImg={require('../../assets/img/todo.png')}
                    nav={newTodo}
                    btnText={'Crear nueva tarea'}
                    />
                           
        
                           
                    
                            
            
                   
                </>
            ) : (
                <>
                    <FlatList
                        data={noToDo}
                        renderItem={({item}) => (
                            <ItemNotToDo 
                            item={item} 
                            cambioTarea={cambioTarea} 
                            openBarra={openBarra} 
                            cambioColor={cambioColor}
                            setCambioColor={setCambioColor}
                            />) 
                        }
                        key={item => item.id}
                        style={{flex: 1}}
                        extraData={noToDo}
                      
                    />
                   

                    <BtnFAB nameIcon={'add'} nav={newTodo} />
                </>
            )}
        </View>
    );
};

export default NotToDoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20
    },
    cabecera: {
        marginBottom:30
    },
    todo: {
        fontSize: 30,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#4690d4',
    },
    list: {
        fontSize: 30,
        color: '#21262f',
    },
    subtitulo: {
        fontSize: 14,
        color: '#21262f',
    }
});
