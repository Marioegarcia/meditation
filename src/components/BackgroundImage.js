import React from 'react'
import { Image } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';

const BackgroundImage = () => {
    
    return (
        <>
            <Image
                // source={require(`../assets/img/${img}`)}
                source={require('../assets/img/splash.png')}
                style={{ position: 'absolute', height: '100%', top: 1 }}
            />


        </>
    )
    
    
}

export default BackgroundImage;
