import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Explorer from '../screens/TabMenu/Explorer';
import MeditaScreen from '../screens/TabMenu/MeditaScreen';
import SettingsScreen from '../screens/TabMenu/SettingsScreen';
import DiarioScreen from '../screens/TabMenu/DiarioScreen';

import { colores } from '../theme/appTheme';
import { windowHeight } from '../utils/Dimentions';



const Tab = createBottomTabNavigator();


const AppNav = () => {

    
    return (
        <Tab.Navigator
        // initialRouteName='MeditaScreen'
        screenOptions={ ({route}) => ({
            tabBarIcon: ({color,focused}) => {
                
                let iconName  = '';
        
                switch (route.name) {
                    case 'Explorer':
                        iconName = 'home';
                        break;
                    case 'DiarioScreen':
                        iconName = 'book';
                        break;
                    case 'MeditaScreen':
                        iconName = 'self-improvement'
                        break;

                    case 'SettingsScreen':
                    iconName = 'person'
                    break;
                    
                    default:
                        iconName = 'home'
                        break;
                }
        
                return  (
                    <View 
                    style={[
                    styles.tabIcon,
                    ] }
                    >
                        <Icon  
                        name={iconName}  
                        style={ 
                            focused && {
                            backgroundColor: colores.pinkLight,
                            borderRadius:5,
                            padding:5
                      
                        }}
                        size={ windowHeight * 3.5 / 100 }
                        color={color} 
                        />   
                    </View>
                    
                )
            },
            tabBarShowLabel:false,
            // tabBarIconStyle:{width: windowHeight * 2 / 100},
            tabBarStyle: { 
                backgroundColor: colores.blanco,
                height: windowHeight * 9 / 100,

            },
            tabBarActiveTintColor: colores.blanco,
            tabBarInactiveTintColor: colores.pinkLight,
            headerShown:false,
            
        })
        }
        sceneContainerStyle={{backgroundColor:'white'}}
        >
            <Tab.Screen
            options={{ title:'Explorer' }}
            name="Explorer" 
            component={Explorer} 
            />
            
            <Tab.Screen
            options={{ title:'Diario' }}
            name="DiarioScreen" 
            component={DiarioScreen} 
            />

            <Tab.Screen
            options={{ title:'Music' }}
            name="MeditaScreen" 
            component={MeditaScreen} 
            />

            <Tab.Screen
            options={{ title:'Settings' }}
            name="SettingsScreen" 
            component={SettingsScreen} 
            
            />
            
        </Tab.Navigator>
    )
}

export default AppNav


const styles = StyleSheet.create({
    tabIcon:{
        width:'80%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})
