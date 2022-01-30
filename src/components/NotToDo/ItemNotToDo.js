import moment from 'moment';
import React, { memo,useState } from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Paragraph, RadioButton,Title} from 'react-native-paper';
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
                style={{
                    borderRadius: 8,
                    marginVertical:5,
                    borderColor:'#4690d4',
                    borderWidth:0.3
                }}
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
                                        textDecorationColor: '#f54090',
                                    },
                                    
                                ]}>
                                {item.todo}
                            </Title>
    
                            <Paragraph> { tipo[item.tipo] } </Paragraph>
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
        borderColor:'#4690d4'
    },

    texto: {
        fontSize: adjust(20),
        fontStyle: 'italic',
        
    },
});
