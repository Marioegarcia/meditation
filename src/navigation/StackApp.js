import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NuevaEntrada from '../screens/Diario/NuevaEntrada';
import DiarioScreen from '../screens/TabMenu/DiarioScreen';
import AppNav from './AppNav';
import EntradaDetails from '../screens/Diario/EntradaDetails';
import EditarEntrada from '../screens/Diario/EditarEntrada';

import Estadistica from '../screens/Medita/Estadistica';
import NotToDoScreen from '../screens/Medita/NotToDoScreen';
import NewNotToDo from '../components/Forms/NewNotToDo';
import ObjetivosScreen from '../screens/Medita/ObjetivosScreen';
import RuedaVidaScreen from '../screens/Medita/RuedaVidaScreen';







const Stack = createNativeStackNavigator();

export const StackApp = () => {
     
    return (
   
    
    <Stack.Navigator
    screenOptions={{
        headerShown: false,

        contentStyle:{
            backgroundColor:'white',
        }
    }}
    >
        <Stack.Screen name="AppNav"  component={ AppNav } />
        <Stack.Screen name="NuevaEntrada" component={ NuevaEntrada } options={{contentStyle: {flex:1}}}/>
        <Stack.Screen name="EntradaDetails"  component={ EntradaDetails } />
        <Stack.Screen name="EditarEntrada"  component={ EditarEntrada } />

        <Stack.Screen name="RuedaVidaScreen"  component={ RuedaVidaScreen } />
        <Stack.Screen  name="Estadistica"  component={ Estadistica } />

        <Stack.Screen name="NotToDoScreen" component={ NotToDoScreen } />
        <Stack.Screen name="NewNotToDo" component={ NewNotToDo } />

        <Stack.Screen name="ObjetivosScreen" component={ ObjetivosScreen } />
     
        
    </Stack.Navigator>

    
    )
}