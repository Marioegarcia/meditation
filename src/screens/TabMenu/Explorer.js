import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import BtnExplorer from '../../components/Explorer/BtnExplorer'
import HeaderTitle from '../../components/Explorer/HeaderTitle'

import { colores } from '../../theme/appTheme'



const Explorer = ({ navigation }) => {
    
    return (
        <>
        
        <View style={styles.container} >


            <View style={styles.fondoTop} > 
            
                <View style={{
                    backgroundColor:colores.enojo,
                    width:40,
                    height:40,
                    borderRadius:100,
                    top:10
                }} 
                />
                <View style={{
                    backgroundColor:colores.miedo,
                    width:40,
                    height:40,
                    borderRadius:100,
                    top:10
                }} 
                />
            </View>
            
            <View style={styles.centro} >
                 <HeaderTitle/>
            </View>
               
            <View
            style={styles.fondoBottom}
            >
                
               
                
                <View style={{alignItems:'center'}} >
                    <Text style={styles.titulo} >Hola Mario </Text>
                    <Text style={styles.subtitulos} >¿Como estas? </Text>
                </View>
                

                <View style={styles.filaBtn}>

                    <BtnExplorer 
                    texto="Escribir Diario" 
                    icono="edit" 
                    onClick={ () => navigation.navigate('NuevaEntrada') }
                    />
                    

                    <BtnExplorer 
                    texto="Hablar con rabbit" 
                    icono="message" 
                    onClick={ () => navigation.navigate('DiarioScreen') }
                    />
                    
                    <BtnExplorer 
                    texto={"Publicar en comunidad"} 
                    icono={"near-me"}
                    onClick={ () => console.log('Publicar en comunidad') }
                    />
                   

                </View>
            </View>
        </View>
        </>
    )
}

export default Explorer

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        justifyContent:'center',
      
    },
    fondoTop:{
        backgroundColor: 'transparent',
        height:'84%',
        width:'100%',
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        paddingHorizontal:10
        
    },
    centro:{
        zIndex:99,
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        
    },
    fondoBottom:{
        backgroundColor: '#c3ecf2',
        height:'45%',
        width:'100%',
        borderTopEndRadius:85,
        borderTopLeftRadius:100,
        flex:3,
        zIndex:99,
        alignItems:'center',
        justifyContent:'space-evenly'
        
    },
    titulo: {
        fontSize:25,
        fontWeight:'bold',
        color:colores.purpleBG,
       
    },
    subtitulos:{
        fontSize:45,
        fontWeight:'bold',
        color:colores.purpleBG
    },
    filaBtn:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'100%',
        // marginTop:10
    },
   
})
