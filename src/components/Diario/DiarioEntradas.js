import moment from 'moment';
import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

import {colores} from '../../theme/appTheme';
import { windowWidth, windowHeight } from '../../utils/Dimentions';
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
                <View style={{flexDirection: 'row', margin: 10,alignItems:'center'}}>
                    <View
                        style={{
                            // padding: 9,
                            borderRadius: 50,
                            marginRight: 7,
                        }}>
                        <ImageIcono url={emociones[item.emocion].img} />
                    </View>
                    <View style={styles.cardContainer}>
                        <Text style={styles.fecha}>
                            {moment.unix(item.fecha).format('ddd')},{' '}
                            {moment.unix(item.fecha).format('DD MMM YY')}{' '}
                        </Text>

                        <Text
                            style={{
                                ...styles.emocion,
                                color: emociones[item.emocion].colores,
                            }}>
                            {sentimientos[item.emocion]}
                        </Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' >{item.situacion}</Text>
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
                <Text style={styles.headerList}> Tus entradas </Text>
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
        fontSize: windowWidth * 6 / 100,
        marginBottom: 5,
        color: colores.purple,
    },
    itemTitulo: {
        // fontSize:25,
        textAlignVertical: 'bottom',
        height: 25,
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
        // borderColor: colores.secundario,
        // padding:9,
        height:90
    },
    cardContainer: {
        backgroundColor: '#FFF',
        paddingVertical: 3,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '65%',
    },
    fecha: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: colores.purpleBG,
        fontSize:windowHeight * 2 / 100,
    },
    emocion: {
        fontWeight: 'bold',
        // color:'#a7a4aa',
        fontSize: windowHeight * 3 / 100,
    },
});
