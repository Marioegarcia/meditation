import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {useForm} from '../../hooks/useForm';
import Titulos from '../Titulos';
import { windowHeight } from '../../utils/Dimentions';
import { Button } from 'react-native-paper';

const Form = ({hideModal,guardarRueda,rueda}) => {
    
    const {form, onChange} = useForm({
        familia: rueda ? rueda.familia : 0,
        salud: rueda ? rueda.salud : 0,
        amistad: rueda ? rueda.amistad : 0,
        trabajoEstudios: rueda ? rueda.trabajoEstudios : 0,
        amorSexo: rueda ? rueda.amorSexo : 0,
        economia: rueda ? rueda.economia : 0,
        espiritual: rueda ? rueda.espiritual : 0,
        crecimientoPersonal:rueda ? rueda.crecimientoPersonal : 0,
    });

    

    const items = [
        {
            id:1,
            nombre:'Familia',
            valor:form.familia,
            inp:'familia'
        },
        {
            id:2,
            nombre:'Salud',
            valor:form.salud,
            inp:'salud'
        },
        {
            id:3,
            nombre:'Amistad',
            valor:form.amistad,
            inp:'amistad'
        },
        {
            id:4,
            nombre:'Trabajo o Estudios',
            valor:form.trabajoEstudios,
            inp:'trabajoEstudios'
        },
        {
            id:5,
            nombre:'Amor y Sexo',
            valor:form.amorSexo,
            inp:'amorSexo'
        },
        {
            id:6,
            nombre:'Economia',
            valor:form.economia,
            inp:'economia'
        },
        {
            id:7,
            nombre:'Espiritual',
            valor:form.espiritual,
            inp:'espiritual'
        },
        {
            id:8,
            nombre:'Crecimiento personal',
            valor:form.crecimientoPersonal,
            inp:'crecimientoPersonal'
        },
    ]

   
    return (
        <View style={styles.container} >
            <Titulos texto={'¿Como te encuentras?'} />
            {
                items.map( (item) => (
                    <View key={item.id} style={styles.item} >
                        <Text style={styles.label} > {item.nombre} {item.valor} </Text>
                        <Slider
                            value={item.valor}
                            // style={{width: 200, height: 40}}
                            minimumValue={0}
                            maximumValue={10}
                            minimumTrackTintColor="red"
                            maximumTrackTintColor="#000000"
                            onValueChange={(value)=>onChange(value,item.inp)}
                            step={1}
                        />
                    </View>
                ))
            } 

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}>
                        <Button
                            style={{marginVertical: 10}}
                            mode="contained"
                            onPress={()=> guardarRueda(form)}>
                            Guardar
                        </Button>
                        <Button
                            style={{marginVertical: 10}}
                            mode="contained"
                            onPress={hideModal}
                            >
                            Cancelar
                        </Button>
                    </View>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    item:{
        marginVertical:windowHeight * 1 / 100
    },
    label:{
        fontSize:windowHeight * 3 / 100
    }
});
