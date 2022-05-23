import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


export const BtnNext = React.memo(({ numero, incrementar }) => {
  return (
    <View style={styles.btnNext}>
        <TouchableOpacity
            onPress={incrementar}
            style={styles.touch}>
            <Icon
                name="chevron-right"
                size={33}
                color="rgba(129, 221, 220, 1)"
                style={styles.icon}
            />
        </TouchableOpacity>
    </View>
  )
})



const styles = StyleSheet.create({
    btnNext: {
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touch:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
    },
    icon:{
        backgroundColor: 'rgba(129, 221, 220, 0.2)',
        borderRadius: 100,
    }
})