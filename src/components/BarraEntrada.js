import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { windowWidth } from '../utils/Dimentions';

const BarraEntrada = ({ isVisible, setIsVisible,goBack,eliminarEntrada ,EditarEntrada}) => {



    return (
        <View style={styles.contenedor} >
            <Icon
                name='arrow-back'
                size={30}
                onPress={goBack }
            />


            {
                isVisible ? (
                    <View style={styles.headerRight} >


                        <View style={styles.iconosRight}>
                            <Menu.Item
                                icon={() => <Icon name='edit' size={20} />}
                                onPress={() => EditarEntrada() }
                                title="Editar"
                            />
                            <Menu.Item
                                icon={() => <Icon name='delete' size={20} />}
                                onPress={() => eliminarEntrada() }
                                title="Borrar"
                            />
                        </View>
                        <View  >
                            <Icon
                                name='more-horiz'
                                size={30}
                                onPress={() => setIsVisible(false)}
                            />
                        </View>
                    </View>
                ) : (
                    <View  >
                        <Icon
                            name='more-vert'
                            size={30}
                            onPress={() => setIsVisible(true)}
                        />
                    </View>
                )

            }



        </View>
    )
}

export default BarraEntrada

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop:2
    },
    iconosRight:{
        position: 'absolute',
        top: 0,
        right: windowWidth * 12 / 100,
        zIndex: 99,
        borderWidth: 1,
        borderColor: 'rgba(126, 126, 126,0.2)',
        backgroundColor: 'white'
    }

})
