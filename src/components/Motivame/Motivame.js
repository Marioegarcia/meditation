import React,{useCallback,useState} from 'react';
import {  View,TouchableOpacity,StyleSheet } from 'react-native'
import { Snackbar } from 'react-native-paper';
import { useCouter } from '../../hooks/useCounter';
import {BtnNext} from '../BtnNext';

import {Quotes} from './Quotes';


export const Motivame = React.memo(() => {
    const { counter, increment,citas } =  useCouter(1);
    const [count, setCount] = useState(0);
    const [visible, setVisible] = React.useState(false);

   
  
    const onDismissSnackBar = () => setVisible(false);

   
    const siguienteCita = () => {
        setCount( count + 1 );
      
        if (count > 5) {
            setVisible(true);
            setTimeout(() => {

                setCount(0);
            }, 5000);
            
        } else {
            increment();
        }

       
    }

    
   
    return (
        <>
            <Quotes cita={citas[counter - 1]}  />

            <BtnNext   incrementar={siguienteCita} />

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Undo',
                onPress: () => {
                    // Do something
                },
                }}>
                Esperemos un momento!.
            </Snackbar>
        </>
    );
});

