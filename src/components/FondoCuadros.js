import {View, StyleSheet} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import {colores} from '../theme/appTheme';

export const FondoCuadros = () => {
    return (
        <>
            <View
                style={[
                    styles.fondo,
                    {
                        height: (windowHeight * 99) / 100,
                       
                        width: windowWidth ,
                       
                        transform: [{rotate: '165deg'}],
                        opacity: 0.3,
                    },
                ]}
            />
            <View
                style={[
                    styles.fondo,
                    {
                        height: (windowHeight * 96) / 100,
                      
                        width: windowWidth ,
                        transform: [{rotate: '160deg'}],
                        opacity: 0.4,
                    },
                ]}
            />
            <View
                style={[
                    styles.fondo,
                    {
                        height: (windowHeight *93) / 100,
                       
                        width: windowWidth ,
                      
                        transform: [{rotate: '155deg'}],
                        opacity: 0.5,
                    },
                ]}
            />
            <View
                style={[
                    styles.fondo,
                    {
                        height: (windowHeight * 85) / 100,
                       
                        width: windowWidth ,
                        opacity:0.7,                        
                        transform: [{rotate: '148deg'}],
                    },
                ]}
            />
        </>
    );
};

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#81dddc',
        // height: windowHeight * 70 / 100,
        // width:windowWidth * 70 / 100,
        position: 'absolute',
        top: windowWidth / 9 , 
        right: -windowWidth / 2,
       
    },
});
