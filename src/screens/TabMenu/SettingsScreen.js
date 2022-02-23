import React, { useContext } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../../context/AuthContext';
import { ObjetivosContext } from '../../context/ObjetivosContext';
import { RuedaContext } from '../../context/RuedaContext';
import { TaskContext } from '../../context/TaskContext';
import { colores } from '../../theme/appTheme';
import { adjust } from '../../utils/Dimentions';

const SettingsScreen = () => {
    const {logOut,nombre,eliminarCuenta} = useContext(AuthContext);
    const {eliminarTablaObjetivos} = useContext(ObjetivosContext);
    const {eliminarTablaRueda} = useContext(RuedaContext);
    const {eliminarTablaTask} = useContext(TaskContext);
    
    const deleteCuenta = ()=> {
        Alert.alert(
            "Eliminar Cuenta",
            "¿Seguro de eliminar la cuenta?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                  eliminarCuenta();
                  eliminarTablaObjetivos();
                  eliminarTablaRueda();
                  eliminarTablaTask();
            } }
            ]
        );
    }

    return (

            <View style={styles.header} >
                <View style={styles.top} >
                    <Text style={styles.nombre} >{nombre}</Text>
                    
                    <Button onPress={logOut} >
                        
                        <Icon name='logout' size={26} color={colores.amor} />
                        
                    </Button>
                </View>
                

                <Button onPress={deleteCuenta} >Eliminar cuenta</Button>
               
                
                
                

            </View>
      
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    header:{    
        flex:1,
        
        margin:10,
        justifyContent:'space-between',
        borderRadius:20,
        elevation:7,
        backgroundColor:'white',
        paddingTop:20,
        paddingLeft:20,
        
    },
    top:{
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    nombre:{
        fontSize: adjust(30),
        color:colores.principal
    }
})
