import React from 'react';
import {View, Text} from 'react-native';
import { colores } from '../theme/appTheme';


const SinData = ({texto}) => {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 200,
            }}>
            
            <Text
                style={{
                    fontSize: 25,
                    // fontWeight: 'bold',
                    color:colores.principal,
                    textAlign:'center'
                }}>
                {texto}
               
            </Text>
        </View>
    );
};

export default SinData;
