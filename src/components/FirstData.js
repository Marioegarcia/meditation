import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { adjust, windowWidth } from '../utils/Dimentions';

export  const FirstData = ({urlImg,btnText,nav}) => {
    return (
        <View style={styles.section}>
            <Image
                source={urlImg}
                style={styles.img}
            />

            <TouchableOpacity
                style={styles.btnNewTask}
                onPress={nav}
            >
                <Text style={styles.btnText}>
                    {btnText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    img: {
        height: 140,
        width: 140,
    },
    section: {
        flex: 1,
        marginTop:40,
        alignItems: 'center',
    },
    btnNewTask: {
        borderColor: '#4690d4',
        borderRadius: 20,
        borderWidth: 2,
        width: (windowWidth * 75) / 100,
        height: (windowWidth * 15) / 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#4690d4',
        fontSize: adjust(16),
        fontFamily: 'serif',
    },
});
