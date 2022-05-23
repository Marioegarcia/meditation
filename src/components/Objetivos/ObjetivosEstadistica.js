import React, { useContext } from 'react'
import { processColor, StyleSheet, Text, View } from 'react-native'
import { PieChart } from 'react-native-charts-wrapper';
import { ObjetivosContext } from '../../context/ObjetivosContext';
import { colores } from '../../theme/appTheme';
import { adjust } from '../../utils/Dimentions';
import SinData from '../SinData';

const ObjetivosEstadistica = () => {
    const {objetivos} = useContext(ObjetivosContext);
    


    if (!objetivos)  return (<SinData texto={'Aún no cuentas con objetivos'} />);

    const concluidas =  objetivos.filter(fin => fin.done == 1)
  
    const inconcluidas = objetivos.filter(fin => fin.done == 0)
 

   
    const data = {
        dataSets: [{
            values: [
                {value: concluidas.length, label: 'Concluidas'},
                {value: inconcluidas.length, label: 'Por concluir'},
                
            ],
            label: 'Objetivos',
            config: {
                colors: [
                  processColor(colores.purple), 
                  processColor(colores.purpleBG), 
                ],
              valueTextSize: 20,
              valueTextColor: processColor(colores.blanco),
              sliceSpace: 5,
              selectionShift: 13,
              // xValuePosition: "OUTSIDE_SLICE",
              // yValuePosition: "OUTSIDE_SLICE",
              valueFormatter: "#.#",
              valueLineColor: processColor(colores.blanco),
              valueLinePart1Length: 0.5
            }
          }],
    
    };
    return (
        <View style={{flex:1}} >
            
            <PieChart
            data={data}
            style={styles.chart}
            legend={{
                enabled: false,
                wordWrapEnabled: true,
            }}
            // extraOffsets={{
            //     left: 5,
            //     top: 5,
            //     right: 5,
            //     bottom: 5,
            // }}
            holeRadius={30}
            // holeColor={processColor('#f0f0f0')}
            transparentCircleRadius={35}
            // transparentCircleColor={processColor('#f0f0f088')}
            maxAngle={380}
            chartDescription={{text: ''}}
            />

            <Text  style={styles.subtitulo} >Total de Objetivos: {objetivos.length} </Text>
        </View>
    )
}

export default ObjetivosEstadistica

const styles = StyleSheet.create({
    chart: {
        flex: 1,
        // width: '60%',
      
    },
    subtitulo:{
        fontSize: adjust(20),
        color:colores.principal,
        textAlign:'center'
    }
})
