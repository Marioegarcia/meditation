import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Titulos from '../../components/Titulos'
import { Subheading } from 'react-native-paper'
import { Tiempo } from '../../components/TimeOut/Tiempo'

export const TimeOutScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Titulos texto={'Time Out!'} />
      <Subheading>Tómate un tiempo para relajarte</Subheading> */}

        {/* <View style={{
            // justifyContent:'center',
            // alignItems:'center',
            // flex:1,
           
        }} > */}
            <Tiempo/>
        {/* </View> */}
      
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        // backgroundColor:'red',
        marginTop:20
    }
})