import { StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import { ProgressBar, Colors } from 'react-native-paper';
import {InputNumerico} from '../InputNumerico';
import {adjust, windowWidth} from '../../utils/Dimentions';
import { BtnTime } from './BtnTime';
import { colores } from '../../theme/appTheme';

export const Temporizador = memo(({api, setTemporizador, formatted,completed,total}) => {
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [barra, setBarra] = useState(1)
    const t = total/60000 ;
    const x = t * 1 / barra ;


    useEffect(() => {
        const temp = horas * 60 + segundos / 60;
        setTemporizador(temp + minutos);
    }, [horas, minutos, segundos]);

    useEffect(() => {
      if (completed) {
        handleStopClick()
      }
    }, [completed])
    

    const handleStartClick = () => {
       
        setBarra(t);
        api.start();
    };

    const handlePauseClick = () => {
        api.pause();
    };

    const handleStopClick = () => {
        setBarra(1);
        setTemporizador(0);
        setHoras(0);
        setMinutos(0);
        setSegundos(0);
        api.stop();
    };


    
    
    

    return (
        <View style={styles.container}>
            <Text style={styles.contador}>
                {' '}
                {formatted.hours}:{formatted.minutes}:{formatted.seconds}{' '}
            </Text>

            <View style={{width:windowWidth - 50}} >
                {
                    api.isStarted() && (
                        <ProgressBar progress={ x  } color={colores.secundarioLight}  />          
                    )
                }
                
            </View>
            

            <View style={styles.body}>
                {
                    ( !api.isPaused() && !api.isStarted() ) && (
                        <View style={styles.temporizador}>
                    <View style={styles.inp}>
                        <InputNumerico time={horas} setTime={setHoras} />
                        <Text>Horas</Text>
                    </View>
                    <View style={styles.inp}>
                        <InputNumerico time={minutos} setTime={setMinutos} />
                        <Text>Minutos</Text>
                    </View>
                    <View style={styles.inp}>
                        <InputNumerico time={segundos} setTime={setSegundos} />
                        <Text>Segundos</Text>
                    </View>
                </View>
                    )
                }

                <View style={styles.btnControll}>

                    {
                        !api.isStarted() && (
    
                            <BtnTime handle={handleStartClick} texto='Start' />
                        )
                    }
                    


                    {
                        api.isStarted() && (
                            <>
                                <BtnTime handle={handlePauseClick} texto='Pause' />
                                <BtnTime handle={handleStopClick} texto='Stop'  />
                            </>
                        )
                    }

                    {
                        api.isStarted() || api.isPaused() && (

                            <BtnTime handle={handleStopClick} texto='Stop'  />
                        )
                    }
                   
                </View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contador: {
        fontSize: adjust(55),
        color: 'black',
    },
    temporizador: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    inp: {
        marginHorizontal: 4,
        alignItems: 'center',
    },
    btnControll: {
        flexDirection: 'row',
        marginTop: 40,
    },
});

// const d = [
//     {"api": {
// "isCompleted": [Function anonymous],
//     "isPaused": [Function anonymous],
//     "isStarted": [Function anonymous],
//     "isStopped": [Function anonymous],
//     "pause": [Function anonymous],
//     "start": [Function anonymous],
//     "stop": [Function anonymous]
//     },
//     "completed": true,
//      "days": 0,
//      "formatted": {"days": "000", "hours": "00", "minutes": "00", "seconds": "00"},
//       "hours": 0,
//       "milliseconds": 0, "minutes": 0,
//        "props": {"autoStart": false,
//        "controlled": false,
//        "date": 1644889066889,
//         "daysInHours": false,
//         "intervalDelay": 1000,
//         "precision": 0,
//         "renderer": [Function renderer],
//         "zeroPadTime": 3},
//        "seconds": 0,
//        "setTemporizador": [Function bound dispatchAction],
//         "total": 0}
// ]
