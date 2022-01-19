import React,{useContext} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {AuthContext} from '../../context/AuthContext';
import { colores } from '../../theme/appTheme';

const HeaderTitle = () => {
    const {nombre} = useContext(AuthContext);
    return (
        <View style={styles.container} >
            <Image
            source={require('../../assets/img/rabbit.png')}
            style={styles.img}
            />
            
        </View>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({
    container:{

        alignItems:'center',
        // zIndex:99,
        flex:1,

    },
    img:{
        width: '100%',
        height: '100%',
        resizeMode: 'center',
        // zIndex:99,
        position:'absolute',
        borderTopRightRadius:100,
        borderTopLeftRadius:100,
        bottom:-10
    },
    titulo: {
        fontSize:25,
        fontWeight:'bold',
       
    },
    subtitulos:{
        fontSize:45,
        fontWeight:'bold',
    }
})
