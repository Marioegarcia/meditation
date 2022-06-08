import React,{ useContext, useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    BackHandler
} from 'react-native';
import {Caption} from 'react-native-paper';


import BarraNotToDo from '../../components/NotToDo/BarraNotToDo';
import BtnFAB from '../../components/BtnFAB';
import {ItemNotToDo} from '../../components/NotToDo/ItemNotToDo';
import { TaskContext } from '../../context/TaskContext';

import {useNoToDo} from '../../hooks/useNoToDo';
import {adjust} from '../../utils/Dimentions';
import { LoadingScreen } from '../LoadingScreen';
import {FirstData} from '../../components/FirstData';
import { colores } from '../../theme/appTheme';
import { useOrden } from '../../hooks/useOrden';

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
    const {  ordenarDone } = useOrden()
    const {noToDo,status} = useContext(TaskContext)

    

   
  

   

    
    if(status === 'checking') return <LoadingScreen/>

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
                <View style={{flex:1, paddingTop:20}} >
                
                    <FlatList
                        data={ordenarDone(noToDo)}
                        renderItem={({item}) => (
                            <ItemNotToDo 
                            item={item} 
                            cambioTarea={cambioTarea} 
                            openBarra={openBarra} 
                            cambioColor={cambioColor}
                            setCambioColor={setCambioColor}
                            selection={selection}
                            />) 
                        }
                        key={item => item.id}
                        style={{flex: 1}}
                        extraData={ordenarDone(noToDo)}
                        ListFooterComponent={(
                        <View style={{height:90}} />
                      )}
                    />
                   <BtnFAB nameIcon={'add'} nav={newTodo} />

                    
                </View>
            )}
        </View>
    );
};

export default NotToDoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colores.bgColor
        
    },
    cabecera: {
        marginBottom:10,
        marginTop:10
    },
    todo: {
        fontSize: adjust(24),
        // fontFamily: 'serif',
        fontWeight: 'bold',
        // color: '#4690d4',
        color: colores.purpleBG,
    },
    list: {
        fontSize: adjust(24),
        color: '#21262f',
    },
    subtitulo: {
        fontSize: adjust(10),
        color: '#21262f',
    }
});
