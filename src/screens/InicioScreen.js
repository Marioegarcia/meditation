import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
  
} from 'react-native';
import { colores } from '../theme/appTheme';


const InicioScreen = ({ navigation }) => {

    return (
        <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={styles.header}>
  
          <Image
            source={require('../assets/img/medit2.png')}
            style={{
              width: '90%',
              height: '40%',
              resizeMode: 'center'
            }}
          />
          <View style={styles.contenedorTexto} >
              <Text
              style={{
                  ...styles.title,
                  color: colores.purple,
              }}>
              Consciencia para ser mejor
              </Text>
  
              <Text
              style={{
                  ...styles.subTitle,
                  color: colores.pinkLight,
              }}>
              Aprende a vivir más feliz.
              </Text>
          </View>
  
          
        </View>
  
          <View
              style={styles.btnGet}
          >
          <TouchableOpacity
              style={{
                  flexDirection: 'row',
                  backgroundColor: colores.pinkMate,
                  width: '100%',
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('LoginScreen') }>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
              }}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  

export default InicioScreen;

const styles = StyleSheet.create({
    header:{
        flex:5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6',
        textAlign:'center'
    },
    subTitle: {
        fontSize: 20,
        marginTop:10
    },
    contenedorTexto:{
        width:'90%',
        alignItems:'center'  
    },
    btnGet:{
        flexDirection: 'row',
        flex:1,
        marginHorizontal: 20,
        alignItems: 'center',
          
    }
});
