import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageIcono from '../../components/ImageIcono'
import { emociones } from '../../utils/Utilis'

const ControlEmociones = ({onChange,input,value}) => {

    const [select, setSelect] = useState(value)

    const selectedEmotion = (value) => {
        setSelect(value);
        onChange(value,input);
    }
   
    
 

 
    return (
        <>
        <View style={styles.content} >
            {
                emociones.map( (emocion)=> (
                    <View 
                    key={emocion.value}
                    style={[
                        styles.toggle,
                    ]}
                    >
                        <TouchableOpacity 
                        
                        onPress={()=> selectedEmotion(emocion.value)} 
                        style={[
                            styles.btnToggle,
                            emocion.value === select && {backgroundColor:emocion.colores}
                        ]}
                        >
                            <ImageIcono url={emocion.img} />
                        </TouchableOpacity>
                        
                        <View
                        style={[
                            styles.txt,
                            emocion.value === select && {backgroundColor:emocion.colores}
                        ]}
                        >
                            <Text 
                            style={{
                                color:'#1C0C5B',
                                fontWeight:'bold',
                                fontSize:16,
                               
                            }}
                            > 
                                {emocion.name} 
                            </Text>
                        </View>
                        
                       
                    </View>
                    
                ) )
            }
        </View>
           
            
        </>
    )
}

export default ControlEmociones

const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
       
        flexWrap:'wrap',
        alignItems:'center',

        justifyContent:'center',
       
    },
    toggle:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical:8,
        marginHorizontal:10,
       
    },
    btnToggle:{
        borderRadius:15,
        padding:10,
        marginBottom:3,
    },
    txt:{
        borderRadius:12,
        paddingHorizontal:7,
        width:'100%',
        alignItems:'center'
    }
})
