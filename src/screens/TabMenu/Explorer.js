import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View,Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { AccesoDirectoHome } from '../../components/AccesoDirectoHome'
import { AccesoDirecto } from '../../components/Explorer/AccesoDirecto'



import HeaderTitle from '../../components/Explorer/HeaderTitle'
import { RecuerdoObjetivo } from '../../components/Explorer/RecuerdoObjetivo'
import { Reflexion } from '../../components/Explorer/Reflexion'

import { colores } from '../../theme/appTheme'
import { adjust, windowHeight } from '../../utils/Dimentions'



const Explorer = ({ navigation }) => {
    
    const crearNueva = (link) => {
        navigation.navigate(link)
    }

    const irA = (go) => {
        navigation.navigate(go)
    }
    return (
        
        <View style={{ flex:1 }}>
            <ScrollView style={[styles.scrollContent]}  showsVerticalScrollIndicator={false}>
                <View style={styles.container} >

                    <View style={[styles.content]} >
                        <HeaderTitle/>
                    </View>

                    <View style={[styles.content,
                    {
                        backgroundColor:'#f7f6fb'
                    }]} >
                        <Reflexion/>
                    </View>

                    <View style={[styles.content,
                    {
                        backgroundColor:'#edf6f7'
                    }]} >
                        <RecuerdoObjetivo crearNueva={crearNueva} />
                    </View>

                    
                    <View style={[styles.content,{backgroundColor:'#E3F8FD'}]} >
                        <Text style={styles.subtitulo} >Accesos directos</Text>
                        <View style={styles.access} >

                            <AccesoDirectoHome 
                            texto={'Diario'} 
                            icono='menu-book' 
                            nav={()=> irA('NuevaEntrada') } 
                            />

                            <AccesoDirectoHome 
                            texto={'Objetivos' }  
                            icono='outlined-flag' 
                            nav={()=> irA('ObjetivoFormScreen') }
                            />

                            <AccesoDirectoHome 
                            texto={'Time out'} 
                            icono='schedule' 
                            nav={()=> irA('TimeOutScreen') } 
                            />
                        </View>
                       
                    </View>
                    
                
                </View>
            </ScrollView>
        </View>
        
            
           
            
            
        
       
    )
}

export default Explorer

const styles = StyleSheet.create({
    scrollContent:{
        backgroundColor:colores.blanco,
        
        
    },
    container:{        
        paddingVertical:15,
        paddingHorizontal:12,
    },
    content:{
        borderRadius:5,
        marginVertical:6,
        overflow:'hidden',
        height:windowHeight / 5,
        
        
    },
    subtitulo:{
        fontSize: adjust(16),
        color: colores.texto,
        fontWeight: 'bold',
        marginTop:10,
        marginHorizontal:10
    },
    access:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:20,
        
    }
   
})
