import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';

import {Motivame} from '../../components/Motivame/Motivame';
import {adjust} from '../../utils/Dimentions';

import {FondoCuadros} from '../../components/FondoCuadros';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Menu, Provider} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';

export const CrearCitaScreen = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);
    const {citasGet} = useContext(AuthContext);

    const openMenu = () => {
        setVisible(true)
    };
    const closeMenu = () => setVisible(false);

    const goNewQuote = () => {
       
        navigation.navigate('NewQuote');
    };
    const nextQuote = () => {
        citasGet();
    };

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <Provider>
            <View style={styles.container}>
                <FondoCuadros />
                <View style={styles.barra}>
                    <Icon
                        onPress={goBack}
                        name="chevron-left"
                        size={33}
                        color="black"
                    />

                    <Icon
                        onPress={goNewQuote}
                        name="open-in-new"
                        size={30}
                        color="black"
                    />
                    
                </View>
                <View>
                    <Motivame />
                </View>
                <View style={styles.btnNext}>
                    <TouchableOpacity
                        onPress={nextQuote}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 60,
                            height: 60,
                        }}>
                        <Icon
                            name="chevron-right"
                            size={33}
                            color="rgba(129, 221, 220, 1)"
                            style={{
                                backgroundColor: 'rgba(129, 221, 220, 0.2)',
                                borderRadius: 100,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    barra: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        top: 15,
        alignItems: 'center',
        marginBottom: 35,
       
    },
    subtitulo: {
        color: '#c2c2c2',
        fontSize: adjust(10),
    },
    btnNext: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
