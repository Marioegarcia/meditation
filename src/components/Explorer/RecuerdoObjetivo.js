import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import {ObjetivosContext} from '../../context/ObjetivosContext';
import {ActivityIndicator, Subheading} from 'react-native-paper';
import {adjust, windowWidth} from '../../utils/Dimentions';
import {colores} from '../../theme/appTheme';



export const RecuerdoObjetivo = ({crearNueva}) => {
    const {objetivos, status} = useContext(ObjetivosContext);
   
    if (status === 'checking') return ( <ActivityIndicator size={60} /> )
    
   
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/img/aro.png')}
                    style={{
                        width: (windowWidth * 30) / 100,
                        height: (windowWidth * 30) / 100,
                        position: 'absolute',
                        right: -20,
                        opacity: 0.1,
                        bottom:0,
                        
                    }}
                />
                <Text style={styles.header}>Objetivo</Text>

                    <View style={styles.containerList}>
                        
                        <FlatList
                            data={objetivos}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => (
                                <View style={styles.objetivo}>
                                    <Subheading style={styles.titulo}  >
                                    {item.titulo}
                                    </Subheading>
                                </View>
                            )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            ListEmptyComponent={()=>(
                                <View style={[
                                styles.objetivo,
                                {
                                    justifyContent:'center',
                                    alignItems:'center',
                                }
                                ]}>
                                    
                                    <TouchableOpacity
                                        style={styles.btnNew}
                                        onPress={() => crearNueva('ObjetivoFormScreen')}
                                        opacity={0.1}
                                    >
                                        <Icon
                                        name='add'
                                        size={37}
                                        color={colores.principal}
                                        />
                                        
                                    </TouchableOpacity>
                                    {/* <Text style={styles.btnText} >Nuevo objetivo</Text> */}
                                </View>
                            )}
                        // numColumns={3}
                        
                        />
                    </View>
            
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        paddingHorizontal:10
    },
    containerList: {
        alignItems:'center',
    },
    objetivo: {
        width: (windowWidth * 90) / 100,
       
        justifyContent:'center',
       
        
    },
    header: {
        fontSize: adjust(16),
        color: colores.texto,
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: adjust(16),
        color: colores.principal,
       
        
        
    },
    btnNew:{
        borderColor: colores.principal,
        borderRadius: 15,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding:6
        
    },
    btnText: {
        color: colores.texto,
        fontSize: adjust(10),
        // fontFamily: 'serif',
    },
});
