import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
 
} from 'react-native';

import FormLogin from '../components/FormLogin';
import SignInHeader from '../components/SignInHeader';
import { colores } from '../theme/appTheme';

const LoginScreen = () => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{flex:1,backgroundColor:colores.blanco}} >
        <View style={styles.container}>

          <SignInHeader />
          <FormLogin />

        </View>
        </ScrollView>
        
      </TouchableWithoutFeedback>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colores.secundario,
    flex: 1,
  },
});
