import React,{ useContext, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import {Caption,Switch} from 'react-native-paper';


import BarraNotToDo from '../../components/NotToDo/BarraNotToDo';
import BtnFAB from '../../components/BtnFAB';
import {ItemNotToDo} from '../../components/NotToDo/ItemNotToDo';
import { TaskContext } from '../../context/TaskContext';

import {useNoToDo} from '../../hooks/useNoToDo';
import {adjust} from '../../utils/Dimentions';
import { LoadingScreen } from '../LoadingScreen';
import {FirstData} from '../../components/FirstData';
import { colores } from '../../theme/appTheme';

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
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => {
        if (isSwitchOn) {
           
        }else{

        }
        setIsSwitchOn(!isSwitchOn)
    }


    

   


    noToDo.sort((a, b) => {
    if(a.done == b.done) {
        return 0; 
    }
    if(a.done < b.done) {
        return -1;
    }
    return 1;
    });
    
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
        paddingHorizontal:5,
    
    },
    cabecera: {
        marginBottom:30
    },
    todo: {
        fontSize: adjust(24),
        fontFamily: 'serif',
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
