import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import InicioScreen from '../screens/InicioScreen';




const Stack = createNativeStackNavigator();

export const Login = () => {
     
    return (
   
    
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle:{
            backgroundColor: 'white',
            
        }
    }}
    >
      <Stack.Screen name="InicioScreen"  component={ InicioScreen } />
      <Stack.Screen name="LoginScreen"  component={ LoginScreen } />

    </Stack.Navigator>

    
    )
}