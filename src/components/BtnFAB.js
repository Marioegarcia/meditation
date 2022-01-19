import React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colores } from '../theme/appTheme';


const BtnFAB = ({nameIcon,nav}) => {


    return (
        <>
            <FAB
                style={styles.fab}
                icon={() => (
                    <Icon name={nameIcon} size={24} color={colores.blanco} />
                )}
                onPress={nav}
            />
        </>
    )
}

export default BtnFAB

const styles = StyleSheet.create({
    fab: {
        backgroundColor: colores.purple,
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
