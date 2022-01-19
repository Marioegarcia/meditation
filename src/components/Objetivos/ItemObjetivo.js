import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ItemObjetivo = ({item}) => {
    const {titulo,id,finObjetivo,done,plazo,ambito,codigo} = item;

    // 'Amistad',
    //     'Trabajo o estudios',
    //     'Amor y sexo',
    //     'Economía',
    //     'Espiritual',
    
    const estilo = [
        {
            bg: 'red',
            img: require('../../assets/img/ambitos/desarrollo.png')
        },
        {
            bg:'blue',
            img: require('../../assets/img/ambitos/familia.png')
        },
        {
            bg:'blue',
            img: require('../../assets/img/ambitos/salud.png')
        },
        {
            bg:'blue',
            img: require('../../assets/img/ambitos/amistad.png')
        },
        {
            bg:'blue',
            img: require('../../assets/img/ambitos/trabajo.png')
        },
        {
            bg:'blue',
            img: require('../../assets/img/ambitos/amor.png')
        },
        {
            bg:'blue',
            img: require('../../assets/img/ambitos/economia.png')
        },
        {
            bg:'blue',
            img: require('../../assets/img/ambitos/espiritual.png')
        },
    ]


    return (
        <View style={styles.container} >

            <View style={{marginRight: 5,
            // backgroundColor:'blue',
            justifyContent:'center'    
            }} >
                <Image
                source={estilo[codigo].img}
                style={{
                    width:50,
                    height:50
                }}
                />
            </View>


            <View style={styles.content} >
                <View style={styles.header} >
                    <Text> {titulo} </Text>
                    <Text> {ambito} </Text>
                </View>
                

                <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                    <Text> {finObjetivo} </Text>
                    <Text> {plazo} </Text>
                </View>
            </View>
            
           
        </View>
    )
}

export default ItemObjetivo

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        marginVertical:5,
        borderRadius:5,
        padding:10,
        flexDirection:'row',
        
    },
    content:{
        // backgroundColor:'red',
        width:'83%',
        
    },
    header:{
        marginBottom:10
    },
    
})
