import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { colores } from '../../theme/appTheme'

const ControlInput = ({onChange,input,value,lines=2}) => {
    
    if (lines==1) return (
        <View style={styles.container} >
           <TextInput
                mode="outlined"
                // placeholder="Inicia tu entrada"
                value={value}
                onChangeText={(value) => onChange( value, input )}
               
                activeOutlineColor={colores.pinkLight}
                outlineColor={'pink'}
                style={styles.inputs}
                selectionColor='pink'
            /> 
        </View>
        
    )

    return (
        <View style={styles.container} >
           <TextInput
                mode="outlined"
                // placeholder="Inicia tu entrada"
                value={value}
                onChangeText={(value) => onChange( value, input )}
                multiline
                numberOfLines={lines}
                activeOutlineColor={colores.pinkLight}
                outlineColor={'pink'}
                style={styles.inputs}
                selectionColor='pink'
            /> 
        </View>
        
    )
}

export default ControlInput

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        marginBottom:10, 
    },
    inputs: {
        backgroundColor: 'white',
        // marginBottom: 10,
        borderColor:'red'
    },
})
