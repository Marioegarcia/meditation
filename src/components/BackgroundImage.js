import React from 'react'
import { Image } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import { windowHeight } from '../utils/Dimentions';

const BackgroundImage = () => {
    
    return (
        <>
            <Image
               
                source={require('../assets/img/splash.png')}
                style={{ position: 'absolute', height: windowHeight + 20, top: 1,width:'100%' }}
            />


        </>
    )
    
    
}

export default BackgroundImage;
