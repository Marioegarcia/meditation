import {StyleSheet, Text, View} from 'react-native';
import React,{useContext} from 'react';
import ControlInput from '../../components/Diario/ControlInput';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FondoCuadros } from '../../components/FondoCuadros';
import { adjust } from '../../utils/Dimentions';
import { colores } from '../../theme/appTheme';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/AuthContext';
import { NotificacionAlerta } from '../../components/NotificacionAlerta';
import SelectDropdown from 'react-native-select-dropdown';


export const NewQuote = ({navigation}) => {
    const {form,onChange} = useForm({
        quote: '',
        autor:'Anonimo',
        categoria:'Inspiración'
    })
    

    const {createQuote} = useContext(AuthContext);

    const sendQuote = () => {
      const {quote} = form;
      
      if (quote.length <= 0) {
        
      }else{
        createQuote(form);
       
        onChange('Anonimo', 'autor');
        onChange( '', 'quote' );
        onChange( 'Inspiración', 'categoria' );
        goBack();
      }
      
    }

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <>
          <FondoCuadros/>
            <View style={styles.header} >
                <Icon
                    onPress={goBack}
                    name="chevron-left"
                    size={33}
                    color="black"
                />
            </View>
            <View style={styles.card}>
                <View >
                  <Text style={styles.label} >Escribe una frase motivadora</Text>
                  <ControlInput 
                    input={'quote'}
                    onChange={onChange}
                    lines={5} 
                  />
                 

                  <Text style={styles.label} >Autor</Text>
                    <ControlInput 
                    input={'autor'}
                    onChange={onChange}
                    lines={1} 
                    value={form.autor}
                    />
                </View>

                <View style={styles.btnBottom} >
                  <Button onPress={goBack}  mode='contained' color={colores.amor} >Cancelar</Button>
                  <Button onPress={sendQuote} mode='contained' color={colores.principal} >Enviar</Button>
                  
                  
                </View>
                
                
            </View>
        </>
    );
};

const styles = StyleSheet.create({
  header:{
    marginVertical:16,
    marginHorizontal:5
  },
   
    label:{
      fontSize:adjust(18),
      color:colores.purpleBG
    },
    card:{
      
      marginVertical:15,
        marginHorizontal:10,
        backgroundColor:colores.blanco,
        borderRadius:10,
        paddingHorizontal:19,
        elevation:4,
        paddingVertical:20
    },
    btnBottom:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'baseline',
      marginTop:20
    }
});
