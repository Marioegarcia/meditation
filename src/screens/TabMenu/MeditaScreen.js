import React, { memo } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { adjust, windowHeight, windowWidth } from '../../utils/Dimentions';
import { Card } from 'react-native-paper';
import Titulos from '../../components/Titulos'
import { colores } from '../../theme/appTheme';



const data = [
    {
        id: 1,
        titulo: 'Rueda de vida',
        img: require('../../assets/img/seed-of-life.png'),
        url:'RuedaVidaScreen'
    }, 
    {
        id: 2,
        titulo: 'Contadar de Estados',
        img: require('../../assets/img/statsBarras.png'),
        url:'Estadistica'
    },
    {
        id: 3,
        titulo: 'Not To-Do List',
        img: require('../../assets/img/to-do-list.png'),
        url:'NotToDoScreen'
    },
    {
        id: 4,
        titulo: 'Objetivos',
        img: require('../../assets/img/goals.png'),
        url:'ObjetivosScreen'
    },
    {
        id: 5,
        titulo: 'Time Out!',
        img: require('../../assets/img/clock.png'),
        url:'TimeOutScreen'
    },
    {
        id: 6,
        titulo: '¡Motívame!',
        img: require('../../assets/img/motivacion.png'),
        url:'CrearCitaScreen'
    },
    
]
const MeditaScreen = memo(({navigation}) => {

  
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate(item.url)}
           activeOpacity={0.9}
           style={styles.btnCard}
        >
            <Card 
            style={styles.card} 
            >
                <Card.Content style={styles.cardContainer} >
                  
                    <Image
                        source={item.img}
                        style={styles.img}
                    />
                  
                    
                    <View>
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
            
           
            
            

                <FlatList
                data={ data }
                ListHeaderComponent={(
                    
                        <View style={styles.cabecera} >
                            <Titulos texto={'Zona de Meditación'} />
                        </View>
                    
                )}
                // renderItem={ ( item ) =>  renderItem(item )}
                renderItem={  renderItem }
                keyExtractor={ (item) => item.id.toString() }
                numColumns={ 2 }
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={{
                    alignItems:'center'
                }}
                />   
            
            
           
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
    btnCard:{
        marginHorizontal:5,
        marginVertical:8,
       
    },
    card: {
        height: windowHeight * 20 / 100,
        width: windowWidth * 45 / 100,
        // borderRadius: 10,
        
    },
    cardContainer: { 
        height: '100%',
        borderRadius: 10,
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    titulo:{
        fontSize: adjust(10),
        fontWeight: 'bold',
        color:colores.purpleBG,
        textAlign:'center'
    },
    img:{
        width: '60%',
        height: '60%',
        resizeMode:'center',
        
    },



})
