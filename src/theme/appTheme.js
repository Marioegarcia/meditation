import {  StyleSheet } from 'react-native';




export const colores = {
    // principal: '#332D73' #3bc5e2,
    principal: '#332D73',
    secundario:'#00B9DA',
   
    bgLight: '#eef2fb',
    bgLight2: '#edf6f7',
    bgLight3: '#E3F8FD',
    
    // blanco: '#ffe9ea',
    blanco: 'white',
    texto:'#123e56',
    secundarioLight: '#3bc5e2',
    tristeza: '#86CDD8',
    enojo:'#F87660',
    alegria:'#FFC900',
    miedo:'#A690BE',
    desagrado:'#87bf6b',
    indefinido:'#F8C399',
    pinkLight:'#fe88b9',
    purple:'#6a3687',
    pinkMate:'#FF98C1',
    purpleBG:'#483a99',

    crecimiento:'#1DD3B0',
    familia:'#ffe84f',
    // #e0ff4f
    salud:'#26bb77',
    amistad:'#fc9527',
    trabajo:'#153131',
    amor:'#CC2936',
    economia:'#470FF4',
    espiritual:'#673eb3',
   

}
export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    globalMarginV:{
        marginVertical:10
    },
    errorsInput:{
        color:colores.danger,
        fontSize:10,
        margin:0,
        padding:0,
    },
    inputForms:{
        marginVertical:5
    }
})