import React from 'react';
import {StyleSheet} from 'react-native';

import Home from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { TaskProvider } from './src/context/TaskContext';
import { ObjetivosProvider } from './src/context/ObjetivosContext';
import { RuedaProvider } from './src/context/RuedaContext';



const AppState = ({ children } ) => {
    return (
      <AuthProvider>
        <RuedaProvider>
          <TaskProvider>
            <ObjetivosProvider>
              {children}
            </ObjetivosProvider> 
          </TaskProvider>
        </RuedaProvider>
        
      </AuthProvider>
    )
  }

const App = () => {
  return (
    <>
    <NavigationContainer>
        <AppState>
            <Home/>
        </AppState>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
