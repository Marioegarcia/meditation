import React, { useContext } from 'react'
import {
    Keyboard,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    View,

} from 'react-native';
import {Text, Button} from 'react-native-paper';



import Titulos from '../../components/Titulos';
import { AuthContext } from '../../context/AuthContext';
import {colores} from '../../theme/appTheme';
import { useForm } from '../../hooks/useForm';
import ControlInput from '../../components/Diario/ControlInput';
import ControlEmociones from '../../components/Diario/ControlEmociones';


const EditarEntrada = ({navigation,route}) => {
    const item = route.params;
    const {updateRegistro,getData} = useContext(AuthContext)

   

    const { form, onChange } = useForm({
        situacion:item.situacion,
        pensamiento:item.pensamiento,
        emocion:item.emocion,
        respuesta:item.respuesta,
        sugerencia:item.sugerencia,
       
    });



    const actualizar = () => {
       
    
  
            updateRegistro({
                ...form,
                id: item.id
            })

            getData();
            // setState(!state);
            navigation.replace('EntradaDetails',{
                ...form,
                id: item.id,
                fecha:item.fecha
            })
        
    }

    const inputsController = [
        {
            id:1,
            input: 'situacion',
            titulo: 'Situacion',
            value: form.situacion,
        },
        {
            id:2,
            input: 'pensamiento',
            titulo: 'pensamiento',
            value: form.pensamiento,
        },
        {
            id:3,
            input: 'emocion',
            titulo: 'Emoción',
            value: form.emocion,
        },
        {
            id:4,
            input: 'respuesta',
            titulo: 'Respuesta',
            value: form.respuesta,
        },
        {
            id:5,
            input: 'sugerencia',
            titulo: 'Sugerencia',
            value: form.sugerencia,
        },
    ]
 

    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={styles.contenedor}>
                   
                    <Titulos texto={'Editar Entrada'} />
                    
                   
                    
                    {
                        inputsController.map( (inp)=> {

                            return (
                              <View key={inp.id}>
                                <Text> {inp.titulo} </Text>

                                {
                                   (inp.id == 3) ?  (
                                    <View>
                                        <ControlEmociones 
                                        onChange={onChange} 
                                        input={inp.input} 
                                        value={inp.value}
                                        />
                                    </View>  
                                ): (
                                    <ControlInput 
                                    onChange={onChange} 
                                    input={inp.input} 
                                    value={inp.value}
                                    />
                                )

                                }
                                   
                                </View>  
                            )
                            
                        } )
                    }


                    <Button
                        mode="contained"
                        onPress={actualizar}
                        contentStyle={{backgroundColor: colores.secundario}}
                        labelStyle={{fontWeight: 'bold', fontSize: 20}}
                        style={{marginTop: 10}}
                    >
                        Actualizar
                    </Button>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default EditarEntrada

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 20,
 
    },
    inputs: {
        backgroundColor: 'white',
        marginBottom: 10,
        maxHeight:'40%'
    },
});