import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import { colores } from '../../theme/appTheme';
import { adjust, windowWidth } from '../../utils/Dimentions';

export const AccesoDirecto = () => {
    const data = [
        {
            name: 'Feliz',
            value: 0,
            img: require('../../assets/img/emotions/feliz.png'),
        },
        {
            name: 'Indiferente',
            value: 1,
            img: require('../../assets/img/emotions/indiferente.png'),
        },
        {
            name: 'Triste',
            value: 2,
            img: require('../../assets/img/emotions/triste.png'),
        },
        {
            name: 'Desagrado',
            value: 3,
            img: require('../../assets/img/emotions/desagrado.png'),
        },
        {
            name: 'Miedo',
            value: 4,
            img: require('../../assets/img/emotions/miedo.png'),
        },
        {
            name: 'Enojo',
            value: 5,
            img: require('../../assets/img/emotions/enojo.png'),
        },
    ];
    const [value, setValue] = React.useState(null);

    const estadoAnimo = (e) => {
        
        setValue(e);
    }

    return (
        <View style={styles.container}>
           
           
                <ToggleButton.Group
                    onValueChange={value => setValue(value)}
                    value={value}>
                    <FlatList
                        initialScrollIndex={value}
                        data={data}
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
                                    onPress={()=>estadoAnimo(item.value)}
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
    },
    section:{
        // marginVertical:20
        justifyContent:'center',
        alignItems:'center'
    },
    toggle:{
        width: windowWidth / 6,
        height:windowWidth / 6,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    img: {
        height: windowWidth / 13,
        width: windowWidth / 13,
    },
    txt:{
        fontSize:adjust(9),
        color:colores.principal,
        textAlign:'center'
    }
});
