import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Titulos from '../../components/Titulos'
import { Subheading } from 'react-native-paper'

export const CrearCitaScreen = () => {
  return (
    <View>
        <Titulos texto={'Motivación'} />
        <Subheading>Escribe una frase que puede necesitar leer alguien</Subheading>
    </View>
  )
}



const styles = StyleSheet.create({})