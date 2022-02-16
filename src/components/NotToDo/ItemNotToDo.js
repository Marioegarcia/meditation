import moment from 'moment';
import React, { memo,useState } from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Paragraph, RadioButton,Title} from 'react-native-paper';
import { colores } from '../../theme/appTheme';
import { adjust } from '../../utils/Dimentions';




export const ItemNotToDo = memo(({item, cambioTarea,openBarra,cambioColor, setCambioColor}) => {
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
                        borderRadius:8
                    }
                    ]}>
                        <RadioButton
                            // value={checked[item.done]}
                            status={checked[item.done]}
                            onPress={() => cambioTarea(item)}
                            uncheckedColor={colores.purple}
                            color={colores.purpleBG}
                        />
    
                        <TouchableOpacity onLongPress={()=> {
                            setCambioColor(item.id)
                            openBarra(item)
                        }} 
                        >
                           
                            <Title
                                style={[
                                    styles.texto,
                                    item.done === 1 && {
                                        textDecorationLine: 'line-through',
                                        fontWeight:'400',
                                        fontStyle:'italic'
                                       
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
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 5,
        alignItems: 'center',
        
    },
    card:{
        borderRadius: 8,
        marginVertical:5,
        borderColor:colores.purpleBG,
        borderWidth:0.3
    },
    texto: {
        fontSize: adjust(17),
        fontStyle: 'italic',
        color: colores.purple
    },
    subtitulo:{
        color:colores.purple
    }
});
