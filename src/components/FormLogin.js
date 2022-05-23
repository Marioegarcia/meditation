import React, {useContext,  useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { colores } from '../theme/appTheme';
import { adjust, windowWidth } from '../utils/Dimentions';


const FormLogin = () => {

  const [inputTexto, setInputTexto] = useState('');
  const {login} = useContext(AuthContext);



  const guardarDatos = async () => {
    if (inputTexto.trim() === '') {
      mostrarAlerta();
      return;
    }
    login(inputTexto);
  };

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Nombre es obligatorios', [{text: 'OK'}]);
  };

  return (
  //  <ScrollView
  //  style={{flex:1,backgroundColor:'white'}}
  //  >
    <View style={styles.container}>
     
     <Text style={styles.label}>Nombre</Text>

     <TextInput
       placeholder="Ingresa tu nombre"
       onChangeText={texto => setInputTexto(texto)}
       style={styles.inputText}
       
     />

     <TouchableOpacity
       style={styles.btn}
       activeOpacity={0.8}
       onPress={guardarDatos}>
       <Text
         style={{
           fontSize: windowWidth * 8 / 100,
           color: 'white',
         }}>
         Entrar
       </Text>
     </TouchableOpacity>
   </View>
  //  </ScrollView>

    // </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 300,
    borderTopStartRadius: 10,
    borderTopEndRadius: 15,
    alignItems: 'center',
    paddingTop:'15%',
    // justifyContent:'space-around'
    
  },
  label: {
    alignSelf: 'flex-start',
    left: 45,
    fontSize: adjust(14),
    color: 'black',
  },
  inputText: {
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    height: windowWidth * 17 / 100,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    color:colores.principal
  },
  btn: {
    backgroundColor: colores.pinkMate,
    width: '80%',
    height: windowWidth * 12 / 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowWidth * 12 / 100,
  },
});
