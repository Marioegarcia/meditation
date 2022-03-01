import React, {useContext} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import { List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../context/AuthContext';
import {ObjetivosContext} from '../../context/ObjetivosContext';
import {RuedaContext} from '../../context/RuedaContext';
import {TaskContext} from '../../context/TaskContext';
import {colores} from '../../theme/appTheme';
import {adjust} from '../../utils/Dimentions';

const SettingsScreen = ({navigation}) => {
    const {logOut, nombre, eliminarCuenta} = useContext(AuthContext);
    const {eliminarTablaObjetivos} = useContext(ObjetivosContext);
    const {eliminarTablaRueda} = useContext(RuedaContext);
    const {eliminarTablaTask} = useContext(TaskContext);
    
    const deleteCuenta = () => {
        Alert.alert('Eliminar Cuenta', '¿Seguro de eliminar la cuenta?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => {
                    eliminarCuenta();
                    eliminarTablaObjetivos();
                    eliminarTablaRueda();
                    eliminarTablaTask();
                },
            },
        ]);
    };

    return (
        <View style={styles.header}>
           

            <List.Section style={styles.top}>
                <List.Subheader>Perfil de Usuario</List.Subheader>
                <List.Item
                    title={nombre}
                    titleStyle={styles.nombre}
                    left={() => <List.Icon  icon={()=> <Icon name="person" color={colores.purple} size={25} />} />}
                />

               
                <List.Item
                    title={'Estadisticas de emociones'}
                    onPress={()=> navigation.navigate('Estadistica')}
                    titleStyle={styles.nombre}
                    left={() => <List.Icon  icon={()=> <Icon name="assignment" color={colores.purple} size={25} />} />}
                />  
                <List.Item
                    title={'Logout'}
                    titleStyle={styles.nombre}
                    onPress={logOut}
                    left={() => <List.Icon  icon={()=> <Icon name="logout" size={25} color={colores.purple} />} />}
                />
                <List.Item
                    title={'Eliminar cuenta'}
                    titleStyle={styles.nombre}
                    left={() => <List.Icon  icon={()=> <Icon name="delete-forever" color={colores.purple} size={25} />} />}
                    onPress={deleteCuenta}
                />


            </List.Section>
            
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    header: {
        flex: 1,

        margin: 10,
        // justifyContent: 'space-between',
        borderRadius: 20,
        elevation: 7,
        backgroundColor: 'white',
        paddingTop: 20,
        // paddingLeft: 20,
    },
    top: {
        flex:1,
        // backgroundColor:'red'
    },
    nombre: {
       fontSize:adjust(16),
        color: colores.principal,
    },
});
