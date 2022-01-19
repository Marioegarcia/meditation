import React from 'react'
import { View, Text, Image } from 'react-native'
import {windowWidth} from '../utils/Dimentions'

const ImageIcono = ({url}) => {
    
    return (
        <>
            <Image
            // source={require('../assets/img/' + url)}
            // source={require(`../assets/img/${url}`)}
            source={url}
            style={{
                height:45,
                width: 45,
            }}
            resizeMode='contain'
            />
        </>
    )
}

export default ImageIcono
