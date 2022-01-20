import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';

export const useEstadisticas = () => {
    const {entradas} = useContext(AuthContext);
    const [dataEmotions, setDataEmotions] = useState({
        feliz: 0,
        indiferente: 0,
        triste: 0,
        desagrado: 0,
        miedo: 0,
        enojo: 0,
    });
 


    const calcularEmociones = () => {
        let feliz = entradas.filter(item => item.emocion === 0);
        let indiferente = entradas.filter(item => item.emocion === 1);
        let triste = entradas.filter(item => item.emocion === 2);
        let desagrado = entradas.filter(item => item.emocion === 3);
        let miedo = entradas.filter(item => item.emocion === 4);
        let enojo = entradas.filter(item => item.emocion === 5);
       

        setDataEmotions({
            feliz: feliz.length,
            indiferente: indiferente.length,
            triste: triste.length,
            desagrado: desagrado.length,
            miedo: miedo.length,
            enojo: enojo.length,
        });
    };

    useEffect(() => {
        calcularEmociones();
    }, [entradas]);

    return {
        dataEmotions,
        entradas
    };
};
