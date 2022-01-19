import {  StyleSheet } from 'react-native';




export const colores = {
    // principal: '#332D73' #3bc5e2,
    principal: '#332D73',
    secundario:'#00B9DA',
    blanco: '#FFFFFF',
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

    crecimiento:'#d99054',
    familia:'#6a998d',
    salud:'#76173b',
    amistad:'#98ccd7',
    trabajo:'#1c4c6d',
    amor:'#f3d37f',
    economia:'#53b7e0',
    espiritual:'#c65d71',
   

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