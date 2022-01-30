import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'


import BtnExplorer from '../../components/Explorer/BtnExplorer'
import HeaderTitle from '../../components/Explorer/HeaderTitle'
import { RecuerdoObjetivo } from '../../components/Explorer/RecuerdoObjetivo'
import { Reflexion } from '../../components/Explorer/Reflexion'

import { colores } from '../../theme/appTheme'
import { windowHeight } from '../../utils/Dimentions'



const Explorer = ({ navigation }) => {
    
    const crearNueva = (link) => {
        navigation.navigate(link)
    }


    return (
        
        <View styles={{flex:1,backgroundColor:'red'}} >
            <ScrollView style={[styles.scrollContent]} >
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
        flex:1,
        justifyContent:'space-around',
        paddingVertical:15,
        paddingHorizontal:12,

    },
    content:{
        borderRadius:5,
        marginVertical:5,
        overflow:'hidden',
        
    },

   
})
