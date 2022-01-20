import React from 'react';
import {StyleSheet, Text, View, processColor} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';
import BackgroundImage from '../../components/BackgroundImage';
import {FirstData} from '../../components/FirstData';
import SinData from '../../components/SinData';
import Titulos from '../../components/Titulos';
import {useEstadisticas} from '../../hooks/useEstadisticas';

const Estadistica = () => {
    const {dataEmotions, entradas} = useEstadisticas();

    const data = {
        dataSets: [
            {
                values: [
                    {value: dataEmotions.desagrado, label: 'Desagrado'},
                    {value: dataEmotions.indiferente, label: 'Indiferente'},
                    {value: dataEmotions.triste, label: 'Triste'},
                    {value: dataEmotions.feliz, label: 'Feliz'},
                    {value: dataEmotions.miedo, label: 'Miedo'},
                    {value: dataEmotions.enojo, label: 'Enojo'},
                ],
                label: '',
                config: {
                    colors: [
                        processColor('#87bf6b'),
                        processColor('#F8C399'),
                        processColor('#86CDD8'),
                        processColor('#FFC900'),
                        processColor('#A690BE'),
                        processColor('#F87660'),
                    ],
                    valueTextSize: 13,
                    valueTextColor: processColor('#2D46B9'),
                    sliceSpace: 5,
                    selectionShift: 13,
                    xValuePosition: 'OUTSIDE_SLICE',
                    //   yValuePosition: "OUTSIDE_SLICE",
                    valueFormatter: "#.#'%'",
                    // valueLineColor: processColor('red'),
                    valueLinePart1Length: 0.5,
                },
            },
        ],
    };

    return (
        <>
            <View style={styles.container}>
                <BackgroundImage />

                {entradas.length > 0 ? (
                    <>
                        <View style={{marginTop: 25}}>
                            <Titulos texto={'Estados de Ánimo'} />
                        </View>
                        <PieChart
                            style={styles.chart}
                            data={data}
                            legend={{
                                enabled: true,
                                textSize: 20,
                                form: 'CIRCLE',
                                // verticalAlignment: "BOTTOM",
                                // orientation: "VERTICAL",
                                wordWrapEnabled: true,
                            }}
                            extraOffsets={{
                                left: 5,
                                top: 5,
                                right: 5,
                                bottom: 5,
                            }}
                            entryLabelColor={processColor('#11324D')}
                            entryLabelTextSize={20}
                            entryLabelFontFamily={'HelveticaNeue-Medium'}
                            drawEntryLabels={false}
                            rotationEnabled={true}
                            rotationAngle={14}
                            usePercentValues={true}
                            styledCenterText={{
                                text: '',
                            }}
                            holeRadius={15}
                            holeColor={processColor('#f0f0f0')}
                            transparentCircleRadius={25}
                            transparentCircleColor={processColor('#f0f0f088')}
                            maxAngle={380}
                            chartDescription={{text: ''}}
                        />
                    </>
                ) : (
                    <SinData texto={'Sin data'} />
                )}
            </View>
        </>
    );
};

export default Estadistica;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chart: {
        flex: 1,
        width: '60%',
        alignSelf: 'center',
    },
});
