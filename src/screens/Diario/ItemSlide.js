import React from 'react';
import {View,StyleSheet} from 'react-native';

import Titulos from '../../components/Titulos';
import { colores } from '../../theme/appTheme';


const ItemSlide = ({item}) => {
    // console.log(item);
    return (
        <View style={styles.container}>
            
            <View  style={styles.header} >
                <Titulos texto={item.ask} size={19} />
                
                {item.component}
            </View>

            
        </View>
    );
};

export default ItemSlide;


const styles = StyleSheet.create({
    container:{
        marginVertical:5,
        marginHorizontal:10,
        backgroundColor:colores.blanco,
        borderRadius:10,
        paddingHorizontal:9,
        elevation:4
    },
    header:{
        // height: 40,
        marginTop: 25,
        marginBottom:30, 
        // alignItems:'center'
    }
})