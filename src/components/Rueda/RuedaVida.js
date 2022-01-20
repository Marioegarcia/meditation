import React from 'react'
import { StyleSheet,processColor, } from 'react-native'
import { RadarChart } from 'react-native-charts-wrapper'
 
import { colores } from '../../theme/appTheme'


const RuedaVida = ({rueda}) => {
    const d = 0.5;
  
    const data = {
        dataSets:[
                {
                    values: [
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},

                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                        {value: 10},
                    ],
                    label: '',
                    config: {
                        // color: processColor('#FF2442'),
                        lineWidth: 4,
                        drawFilled: true,
                        fillColor: processColor('blue'),
                        drawValues: false,
                    },
                },
                  {
                      values: [
                        {value: rueda.crecimientoPersonal  },
                        {value: rueda.crecimientoPersonal },
                        {value: rueda.crecimientoPersonal},
                        {value: rueda.crecimientoPersonal },


                        {value: d},
                        {value: d},
                        {value: d},
                        {value: d},


                        {value: d},
                        {value: d},
                        {value: d},
                        {value: d},

                        {value: d},
                        {value: d},
                        {value: d},
                        {value: d},

                        {value: d},
                        {value: d},
                        {value: d},
                        {value: d},

                        {value: d},
                        {value: d},
                        {value: d},
                        {value: d},

                        {value: d},
                        {value: d},
                        {value: d},
                        {value: d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},
                      ],
                      label: 'Crecimiento personal',
                      config: {
                          color: processColor(colores.crecimiento) ,
                          lineWidth: 3,
                          drawFilled: true,
                          fillColor: processColor(colores.crecimiento) ,
                          drawValues:false,
                          fillAlpha: 240,
                      },
                  },
                  {
                      values: [
                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},


                        {value: rueda.familia},
                        {value: rueda.familia},
                        {value: rueda.familia},
                        {value: rueda.familia},


                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},
                      ],
                      label: 'Familia',
                      config: {
                          color: processColor(colores.familia) ,
                          lineWidth: 3,
                          drawFilled: true,
                          fillColor: processColor(colores.familia) ,
                          drawValues:false,
                          fillAlpha: 240,
                      },
                  },
                  {
                      values: [
                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},
                        
                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: rueda.salud},
                        {value: rueda.salud},
                        {value: rueda.salud},
                        {value: rueda.salud},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},
                      ],
                      label: 'Salud',
                      config: {
                          color: processColor(colores.salud) ,
                          lineWidth: 3,
                          drawFilled: true,
                          fillColor: processColor(colores.salud) ,
                          drawValues:false,
                          fillAlpha: 240,
                      },
                  },
                  {
                      values: [
                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: rueda.amistad},
                        {value: rueda.amistad},
                        {value: rueda.amistad},
                        {value: rueda.amistad},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},
                      ],
                      label: 'Amistad',
                      config: {
                          color: processColor(colores.amistad) ,
                          lineWidth: 3,
                          drawFilled: true,
                          fillColor: processColor(colores.amistad) ,
                          drawValues:false,
                          fillAlpha: 240,
                      },
                  },
                  {
                      values: [
                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},                       

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: rueda.trabajoEstudios},
                        {value: rueda.trabajoEstudios},
                        {value: rueda.trabajoEstudios},
                        {value: rueda.trabajoEstudios},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},
                      ],
                      label: 'Trabajo o estudios',
                      config: {
                          color: processColor(colores.trabajo) ,
                          lineWidth: 3,
                          drawFilled: true,
                          fillColor: processColor(colores.trabajo) ,
                          drawValues:false,
                          fillAlpha: 240,
                      },
                  },
                  {
                      values: [
                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},                      

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: rueda.amorSexo},
                        {value: rueda.amorSexo},
                        {value: rueda.amorSexo},
                        {value: rueda.amorSexo},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},
                      ],
                      label: 'Amor y sexo',
                      config: {
                          color: processColor(colores.amor) ,
                          lineWidth: 3,
                          drawFilled: true,
                          fillColor: processColor(colores.amor) ,
                          drawValues:false,
                          fillAlpha: 240,
                      },
                  },
                  {
                      values: [
                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                      {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},                      

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: rueda.economia},
                        {value: rueda.economia},
                        {value: rueda.economia},
                        {value: rueda.economia},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},
                      ],
                      label: 'Economía',
                      config: {
                          color: processColor(colores.economia) ,
                          lineWidth: 3,
                          drawFilled: true,
                          fillColor:processColor(colores.economia) ,
                          drawValues:false,
                          fillAlpha: 240,
                          
                      },
                  },
                  {
                      values: [
                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},                     

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: d},
                        {value:  d},
                        {value:  d},
                        {value:  d},

                        {value: rueda.espiritual},
                        {value: rueda.espiritual},
                        {value: rueda.espiritual},
                        {value: rueda.espiritual},

                       
                      ],
                      label: 'Espiritual',
                      config: {
                          color: processColor(colores.espiritual) ,
                          lineWidth: 3,
                          drawFilled: true,
                          fillColor: processColor(colores.espiritual) ,
                          drawValues:false,
                          fillAlpha: 240,
                      },
                  },
              
            ]
            
    };
    return (
        <>
                <RadarChart
                    data={data}
                    extraOffsets={{left: 5, top: 5, right: 5, bottom: 5}}
                    xAxis={{
                        drawLabels: false,
                        enabled:false,
                    
                    }}
                    yAxis={{
                        enabled: false,
                        drawLabels:false,
                       
                      
                    }}
                    legend={{
                        enabled: true,
                        textSize: 14,
                        form: 'CIRCLE',
                        wordWrapEnabled: true,
                    }}
                    chartDescription={{text: ''}}
                    style={styles.chart}        
                    drawWeb={false}
                    webAlpha={255}
                    
            
                />
        </>
    )
}

export default RuedaVida

const styles = StyleSheet.create({
    chart: {
        flex: 1,
    },
})
