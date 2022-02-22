import React, { memo, useEffect } from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Paragraph, RadioButton,Title} from 'react-native-paper';

import { colores } from '../../theme/appTheme';
import { adjust, windowHeight } from '../../utils/Dimentions';




export const ItemNotToDo = memo(({item, cambioTarea,openBarra,cambioColor, setCambioColor,selection}) => {
        const checked = ['unchecked', 'checked'];
       
        const tipo = [
        'Te hace perder el tiempo',
        'Te estresa',
        'Te drenan tu energia',
        'Te sientes obligado/a a hacer',
        'No tienen que hacese',
        'No se puede controlar'
        ]
       
       
        

        
        
        return (
            <>
                <Card
                style={styles.card}
                mode='outlined'
                >
        
                    <Card.Content style={[styles.container,
                    cambioColor === item.id && {
                        backgroundColor:'rgba(144,130,130,0.1)',
                        borderColor:'rgba(144,130,130,0.1)',
                    }
                    ]}>
                        <RadioButton
                            // value={checked[item.done]}
                            status={checked[item.done]}
                            onPress={() => cambioTarea(item)}
                            uncheckedColor={colores.purple}
                            color={colores.principal}
                        />
    
                        <TouchableOpacity 
                        onLongPress={()=> {
                            setCambioColor(item.id)
                            openBarra(item)
                        }} 
                        style={{flex:1}}
                        >
                            
                            <Title
                                style={[
                                    styles.texto,
                                    item.done === 1 && {
                                        textDecorationLine: 'line-through',
                                        fontWeight:'400',
                                        fontStyle:'italic',
                                        color:'grey'
                                    },
                                    
                                ]}>
                                {item.todo}
                            </Title>
    
                            <Paragraph style={styles.subtitulo} > { tipo[item.tipo] } </Paragraph>
                        </TouchableOpacity>
                        
                    </Card.Content>
    
                   
    
                </Card>
            </>
        );
    }
)

const styles = StyleSheet.create({

    card:{
        borderRadius: 0,
        marginVertical:5,
        // borderColor:colores.purpleBG,
        borderWidth:0.1,
        marginHorizontal:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 6,
        
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        height:windowHeight / 9
    },
    texto: {
        fontSize: adjust(15),
        
        color: colores.principal
    },
    subtitulo:{
        // color:colores.purple
        fontSize: adjust(10)
    }
});
