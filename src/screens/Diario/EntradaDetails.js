import React, {useContext, useState} from 'react';
import { StyleSheet, View} from 'react-native';
import moment from 'moment';
import {
    Text,
} from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Titulos from '../../components/Titulos';
import BackgroundImage from '../../components/BackgroundImage';
import BarraEntrada from '../../components/BarraEntrada';

import {AuthContext} from '../../context/AuthContext';

import { windowWidth } from '../../utils/Dimentions';
import { emociones } from '../../utils/Utilis';
import ImageIcono from '../../components/ImageIcono';
import {colores} from '../../theme/appTheme';



const EntradaDetails = ({navigation, route}) => {
    const item = route.params;
    const { id} = item;
    const {eliminarRegistro, getData} = useContext(AuthContext);
    const [state, setState] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)


    const eliminarEntrada = () => {
        try {
            eliminarRegistro(id);
            getData();
            setIsVisible(false);
            navigation.goBack()
        } catch (error) {
            console.log(error);
        }
    };

    const EditarEntrada = () => {
        setIsVisible(false)
        navigation.replace('EditarEntrada',item)
    }

    const entradaDiario = [
        {
            contenido: item.situacion,  
            title:'Situacion',
            id:1,
            emocion:item.emocion
        },
        {
            contenido: item.pensamiento,  
            title:'Pensamiento',
            id:2 ,
            emocion:item.emocion 
        },
        {
            contenido: item.emocion,  
            title: 'Emoción',
            id:3,
            emocion:item.emocion
        },
        {
            contenido: item.respuesta,  
            title: 'Respuesta',
            id:4,
            emocion:item.emocion
        },
        {
            contenido: item.sugerencia,  
            title: 'Sugerencia', 
            id:5,
            emocion:item.emocion  
        },
    ]

    const goBack = () => {

        navigation.navigate('DiarioScreen')    
    }


    const ItemSlide = ({item}) => {
    
        return (
            <View style={{justifyContent:'center', marginTop:40}} >
             
                <Titulos texto={item.title} />

                <View  style={{justifyContent:'center',alignItems:'center'}}>
                    { 
                        (item.id === 3)  ? (
                        <View style={[styles.sentimiento, {backgroundColor:emociones[item.emocion].colores}]} >
                            <ImageIcono url={emociones[item.emocion].img} />
                            <Text> {emociones[item.emocion].name} </Text> 
                        </View>
                          
                        )
                        :(
                            <View style={{marginHorizontal:15,marginTop:30}}>
                                <Text style={{fontSize:23}} >{item.contenido}</Text>
                            </View>
                            
                        )
                        
                    }
                </View>
               
                
                
            </View>
        );
    };

    return (
        <>
            <View style={{...styles.contenedor}}>
                
                <BackgroundImage/>
                
                <BarraEntrada 
                isVisible={isVisible} 
                setIsVisible={setIsVisible} 
                goBack={goBack}
                eliminarEntrada={eliminarEntrada}
                EditarEntrada={EditarEntrada}
                setState={setState}
                state={state}
                />

                <View style={{justifyContent:'center',alignItems:'center'}} >
                    <Titulos texto={'Diario de emociones'} />

                    <Text style={{textTransform:'uppercase'}} >{moment.unix(item.fecha).format('DD MMMM YYYY')} </Text>
                </View>
                

                <Carousel
                // ref={ (c) => { this._carousel = c; }}
                data={ entradaDiario }
                keyExtractor={ (item) => item.id }
                renderItem={ ( item ) => ItemSlide(item) }
                sliderWidth={ windowWidth }
                itemWidth={ windowWidth }
                // firstItem={activeIndex}
                layout="default"
                onSnapToItem={ (index) => {
                    setActiveIndex(index);
                    
                }}
             
                
            />

                <Pagination 
                    dotsLength={ entradaDiario.length }
                    activeDotIndex={ activeIndex }
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: colores.secundarioLight ,
                    }}
                />


              
                

                
            </View>
            
        </>
    );
};

export default EntradaDetails;

const styles = StyleSheet.create({
    contenedor: {
        paddingHorizontal: 5,
        flex: 1,
        paddingTop: 10,
    },
    header: { 
        justifyContent: 'center',
        alignItems: 'center'
    },
    card:{
        minHeight:'50%',
        maxHeight:'80%',
        borderRadius: 30,
        // borderWidth: 0.5,
        borderColor: colores.secundarioLight,
        backgroundColor:'#FAFAFA'
    },
    sentimiento:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        width:'45%',
        height:140,
        borderRadius:30
    }
});
