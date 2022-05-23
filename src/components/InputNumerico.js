import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { adjust } from '../utils/Dimentions';
import { colores } from '../theme/appTheme';

export const InputNumerico = ({time, setTime}) => {
    const onChange = number => {
        if (isNaN(number)) {
            setTime(parseInt(time));
        }

        setTime(parseInt(number));
    };

    const mas = () => {
        setTime(time + 1);
    };

    const menos = () => {
        if (time === 0) {
            setTime(0);
        } else {
            setTime(time - 1);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                mode="flat"
                editable={false}
                keyboardType="numeric"
                onChangeText={text => onChange(text)}
                placeholder="00"
                placeholderTextColor={'black'}
                value={time.toString()}
                maxLength={3} //setting limit of input
                style={styles.inp}
                underlineColor='transparent'
                textAlign='center'
                textAlignVertical='center'
            />

            <View style={styles.contentIcon}>

                <TouchableOpacity style={[styles.btn]} onPress={mas}>
                    <Icon style={styles.icono} name="expand-less" size={25} color={colores.principal} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn]} onPress={menos}>
                    <Icon style={styles.icono} name="expand-more" size={25} color={colores.principal}/>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical:5
    },
    inp:{
        backgroundColor:'white',
        borderWidth:0.3,
        fontSize:adjust(20),
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4,
        borderTopRightRadius:0,
    },
    contentIcon: {
        borderWidth:0.3,
        // borderRadius:4,
        borderTopRightRadius:4,
        borderBottomRightRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        // backgroundColor:'blue',
        width:50
    },
    icono:{
        // justifyContent:'center',
        alignSelf:'center'
    }
});
