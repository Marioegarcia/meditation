import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';

import {adjust, windowWidth} from '../../utils/Dimentions';

import {colores} from '../../theme/appTheme';

import { AuthContext } from '../../context/AuthContext';
import {  Subheading } from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialIcons';


export const Reflexion = React.memo(() => {
    const [count, setCount] = useState(0);
    const {citas,citasGet} = useContext(AuthContext);

   
    const siguienteCita = () => {
        setCount( count + 1 );
      
        if (count > 5) {
            setTimeout(() => {
                setCount(0)
            }, 60000);
        } else {
            citasGet();
        }
       
    }

    return (
        <View style={styles.card} >
            <View style={styles.contentImg} >
                <Image
                    source={require('../../assets/img/nube.png')}
                    style={styles.img}
                />
               <Image
                    source={require('../../assets/img/nube.png')}
                    style={styles.img}
                />
                <Image
                    source={require('../../assets/img/nube.png')}
                    style={styles.img}
                />
            </View>
            


            <View style={styles.cardContent}>
                <View style={{flexDirection: 'row', marginVertical: 15}}>
                   
                    <Subheading selectable style={styles.reflexion} >{'"'+citas.nota+'"'}</Subheading>
                </View>
                    <Subheading selectable style={styles.autor}>- {citas.autor}</Subheading>
                
            </View>

            <View style={styles.btnNext} >
                <TouchableOpacity onPress={siguienteCita} >
                    <Icon name='navigate-next' size={adjust(20)}  />
                </TouchableOpacity>
            </View>
            {/* <Button onPress={siguienteCita} >Next</Button> */}
        </View>
    );
})

const styles = StyleSheet.create({
    card:{
        // marginVertical:20
        paddingVertical:6,
        paddingHorizontal:7,
        justifyContent:'center',
        alignItems:'center'
        
    },
    cardContent: {
        alignItems: 'center',
        minHeight:170,
        justifyContent:'center'
    },
    titulo:{
        fontSize: adjust(16),
        color: colores.texto,
        fontWeight: 'bold',
    },
    reflexion: {
        fontSize: adjust(15),
        fontFamily: 'serif',
        color: colores.principal,
        fontStyle: 'italic',
    },
    contentImg:{
        width:windowWidth,
    },
    img:{
        width: (windowWidth * 36) / 100,
        height: (windowWidth * 24) / 100,
        position: 'absolute',
        left: -30,
        opacity: 0.1,
        bottom:-190
        // resizeMode:'repeat'
        
    },
    autor: {
        fontSize: adjust(14),
        color: colores.principal,
    },
    btnNext:{
        position:'absolute',
        bottom:0,
        right:0,
        marginHorizontal:20,
        marginVertical:10
    }
});
