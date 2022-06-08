import React,{ useEffect } from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colores } from '../../theme/appTheme';
import { adjust, windowWidth } from '../../utils/Dimentions';
import { emociones } from '../../utils/Utilis';

export const AccesoDirecto = () => {

    const [value, setValue] = React.useState(null);
    const [onChange, setOnChange] = React.useState('');

    const estadoAnimo = async(e) => {
        
        // console.log(e);
        await AsyncStorage.setItem('sentimiento',e.name);
        // await AsyncStorage.setItem('valueSentimiento', e.toString());
        setOnChange(e.name)
       
        
    }

    const onButtonToggle = () => {
        
        AsyncStorage.getItem('sentimiento').then((value) => {
            if (value) {
                setValue(value);
            }
        });
        
      };

    
    
       
    useEffect(() => {
        onButtonToggle(); 
    }, [onChange])
    
   
  

    return (
        <View style={styles.container}>
           
           
                <ToggleButton.Group
                    onValueChange={value => setValue(value)}
                    value={value}
                    
                >
                    <FlatList
                        initialScrollIndex={value}
                        data={emociones}
                        keyExtractor={item => item.value}
                        renderItem={({item}) => (
                            <>
                                <ToggleButton
                                    icon={() => (
                                        <View style={styles.section}>
                                        
                                            <Image
                                                source={item.img}
                                                style={styles.img}
                                            
                                            />
                                            <Text style={styles.txt} >{item.name}</Text>
                                        </View>
                                    )}
                                    value={item.value}
                                    style={styles.toggle}
                                    onPress={()=>estadoAnimo(item)}
                                    status={value === item.name ? 'checked' : 'unchecked' }
                                    color={item.colores}

                                />
                            </>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        
                    />
                </ToggleButton.Group>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:10
    },
    section:{
        // marginVertical:20
        justifyContent:'center',
        alignItems:'center'
    },
    toggle:{
        width: windowWidth / 6.1,
        height:windowWidth / 6.1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        
    },
    img: {
        height: windowWidth / 13,
        width: windowWidth / 13,
    },
    txt:{
        fontSize:adjust(6),
        color:colores.principal,
        textAlign:'center'
    }
});
