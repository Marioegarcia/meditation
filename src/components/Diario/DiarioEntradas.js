import moment from 'moment';
import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

import {colores} from '../../theme/appTheme';
import { windowWidth, windowHeight, adjust } from '../../utils/Dimentions';
import {emociones} from '../../utils/Utilis';
import ImageIcono from '../ImageIcono';

const DiarioEntradas = ({entradas, navigation}) => {
    const sentimientos = [
        'Feliz',
        'Indiferente',
        'Triste',
        'Desagrado',
        'Miedo',
        'Enojo',
    ];

    const renderItem = ({item}) => (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('EntradaDetails', item)}
            style={{padding: 0, margin: 0}}>
            <Card
                style={{
                    ...styles.card,
                    backgroundColor: emociones[item.emocion].colores,
                }}>
                <View style={{flexDirection: 'row', margin: 10,alignItems:'center',flex:1}}>
                    <View
                        style={{
                            borderRadius: 50,
                            marginRight: 7,
                        }}>
                        <ImageIcono url={emociones[item.emocion].img} />
                    </View>
                    
                    <View style={styles.cardContainer}>
                        
                        <View style={{flex:1,justifyContent:'center'}} >
                            <Text style={styles.situacionTxt} numberOfLines={1} ellipsizeMode='tail' >{item.situacion}</Text>
                        </View>
                        
                        

                        <View >
                            <Text style={styles.fecha}>
                                {/* {moment.unix(item.fecha).format('ddd')},{' '} */}
                                {moment.unix(item.fecha).format('DD MMM YY')}{' '}
                            </Text>

                            <Text
                                style={{
                                    ...styles.emocion,
                                    color: emociones[item.emocion].colores,
                                }}>
                                {sentimientos[item.emocion]}
                            </Text>
                        </View>
                    </View>
                   

                </View>
            </Card>
        </TouchableOpacity>
    );

    const itemSeparator = () => {
        return (
            <View
                style={{
                    // borderBottomWidth:1,
                    marginVertical: 5,
                }}
            />
        );
    };

    const Cabecera = () => {
        return (
            <>
                <Text style={styles.headerList}>Tus entradas </Text>
            </>
        );
    };

    return (
        <>
            <FlatList
                data={entradas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={Cabecera}
                ItemSeparatorComponent={itemSeparator}
                ListFooterComponent={<View style={{marginBottom: 15}} />}
                showsVerticalScrollIndicator={false}                
            />
        </>
    );
};

export default DiarioEntradas;

const styles = StyleSheet.create({
    headerList: {
        fontSize: adjust(17),
        marginBottom: 5,
        color: colores.purple,
        marginLeft:15
    },
    card: {
        shadowColor: colores.tristeza,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        borderRadius: 15,
        elevation: 4,
        marginHorizontal: 10,
        borderWidth: 0.5,
    },
    cardContainer: {
        backgroundColor: '#FFF',
        paddingVertical:10,
        paddingHorizontal:5,
        margin:5,        
        borderRadius: 10,
        flexDirection:'row',
        flex:1,
        // height:'100%',
        justifyContent:'space-evenly',
        // alignItems:'baseline'
    },
    fecha: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: colores.purpleBG,
        fontSize:adjust(10),
    },
    emocion: {
        fontWeight: 'bold',
        // color:'#a7a4aa',
        fontSize: adjust(16),
    },
    situacionTxt:{
        fontSize:adjust(16),
    }
});
