import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { colores } from '../../theme/appTheme'

const ControlTipoTarea = () => {

    const tipoTarea = [
        {
            id:1,
            valor:0,
            titulo:'Cosas que te hacen perder el tiempo'
        },
        {
            id:2,
            valor:1,
            titulo:'Cosas que te estresan'
        },
        {
            id:3,
            valor:2,
            titulo:'Cosas que te drenan tu energia'
        },
        {
            id:4,
            valor:3,
            titulo:'Cosas que te sientes obligada/o a hacer'
        },
        {
            id:5,
            valor:4,
            titulo:'Cosas que no tienen que hacerse'
        },
        {
            id:6,
            valor:5,
            titulo:'Cosas que no puedes controlar'
        },
    ]

    return (
        < >

            <FlatList
            data={tipoTarea}
            renderItem={({item})=>(
                <View key={item.id} style={styles.toggle} >
                        <Text  style={{color:colores.principal}} > {item.titulo} </Text>

                        <TouchableOpacity 
                        
                        onPress={()=> {} } 
                        style={[
                            styles.btnToggle,
                          
                        ]}
                        >
                            
                        </TouchableOpacity>

                    </View>
            )}
            keyExtractor={(item)=> item.id}
        
            />


            {/* {
                tipoTarea.map( tipo => (
                    <View key={tipo.id} style={styles.toggle} >
                        <Text> {tipo.titulo} </Text>

                        <TouchableOpacity 
                        
                        onPress={()=> {} } 
                        style={[
                            styles.btnToggle,
                          
                        ]}
                        >
                            
                        </TouchableOpacity>

                    </View>
                    
                ) )
            } */}
        </>
    )
}

export default ControlTipoTarea

const styles = StyleSheet.create({
    toggle:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical:8,
        marginHorizontal:10,
        borderWidth:1,
        borderColor:'blue',
        borderRadius:6,
        backgroundColor:'red'
    },
    btnToggle:{
        borderRadius:15,
        padding:10,
        marginBottom:3,
    },
})
