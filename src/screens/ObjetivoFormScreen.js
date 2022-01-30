import { View, Text } from 'react-native';
import React from 'react';
import { FormObjetivos } from '../components/Objetivos/FormObjetivos';

export const ObjetivoFormScreen = ({navigation,route}) => {
    const item = route.params;
    
    return (
        <>
        <FormObjetivos
            item={item ? item : false }
            navigation={navigation}
        />
        </>
    );
};


