import React, { memo } from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { windowHeight, windowWidth } from '../../utils/Dimentions';
import { Card } from 'react-native-paper';
import Titulos from '../../components/Titulos'
import BackgroundImage from '../../components/BackgroundImage'



const data = [
    {
        id: 1,
        titulo: 'Rueda de la vida',
        img: require('../../assets/img/statsCircular.png'),
        url:'RuedaVidaScreen'
    }, 
    {
        id: 2,
        titulo: 'Estadisticas',
        img: require('../../assets/img/statsBarras.png'),
        url:'Estadistica'
    },
    {
        id: 3,
        titulo: 'Not To-Do List',
        img: require('../../assets/img/todo.png'),
        url:'NotToDoScreen'
    },
    {
        id: 4,
        titulo: 'Objetivos',
        img: require('../../assets/img/objetivos.png'),
        url:'ObjetivosScreen'
    },
    {
        id: 6,
        titulo: '4Rueda de la vida',
        img: require('../../assets/img/rainbow.png'),
        
        url:'RuedaScreen'
    },
    {
        id: 7,
        titulo: '4Rueda de la vida',
        img: require('../../assets/img/rainbow.png'),
        
        url:'RuedaScreen'
    },
    {
        id: 8,
        titulo: '4Rueda de la vida',
        img: require('../../assets/img/rainbow.png'),
        
        url:'RuedaScreen'
    },
    {
        id: 9,
        titulo: '4Rueda de la vida',
        img: require('../../assets/img/rainbow.png'),
        
        url:'RuedaScreen'
    },
]
const MeditaScreen = memo(({navigation}) => {



    // const renderItem = ({ item }) => (
    //     <TouchableOpacity
    //         onPress={() => navigation.navigate('EntradaDetails', item)}
           
    //     >
    //         <View style={{
    //             ...styles.cardContainer,
    //             width: windowWidth * 0.4,
                
    //         }}
    //         >
    //             <Image
    //                 source={require('../../assets/img/splash.png')}
    //                 style={styles.img}
    //             />

    //             <View>
    //                 <Text style={ styles.titulo }>
    //                     {item.titulo}
    //                 </Text>
    //             </View>

               

               

               
    //         </View>

           
    //     </TouchableOpacity>

    // );

  

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate(item.url)}
           
        >
            <Card 
            style={{
                ...styles.card,
            }} 
            >
                <Card.Content style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                
                }}  
                >
                  
                    <Image
                        source={item.img}
                        style={styles.img}
                    />
                  
                    
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={ styles.titulo }>
                            {item.titulo}
                        </Text>
                    </View>
                </Card.Content>
               
            </Card>

           
        </TouchableOpacity>

    );

    return (
        <View style={{flex:1}} >
            <BackgroundImage/>
           
            
            <View
                style={{ alignItems: 'center' }}
            >

                <FlatList
                data={ data }
                ListHeaderComponent={(
                    <ImageBackground
                    source={require('../../assets/img/pastel.png')}
                    style={styles.cabecera}
                    >
                        <View  >
                            <Titulos texto={'Zona de Meditación'} />
                        </View>
                    </ImageBackground>
                )}
                renderItem={ ( item ) =>  renderItem(item )}
                keyExtractor={ (item) => item.id.toString() }
                numColumns={ 2 }
                showsVerticalScrollIndicator={ false }
                />   
            </View>
            
           
        </View>
    )
})

export default MeditaScreen

const styles = StyleSheet.create({
    cabecera:{
        paddingVertical:27,
        alignItems:'center',
        marginBottom:10
    },
    card: {
        marginHorizontal: 5,
        height: windowHeight * 20 / 100,
       
        marginBottom: 30,
        borderRadius: 10,
        paddingVertical:10,
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    cardContainer: { 
        height: '100%',
        borderRadius: 10,
        borderColor:'red',
        // backgroundColor:'blue',
        
    },
    titulo:{
        fontSize: windowHeight * 2 / 100,
        fontWeight: 'bold',
    },
    img:{
        width: '100%',
        height: '90%',
        resizeMode:'center',
        // backgroundColor:'yellow'
    },



})
