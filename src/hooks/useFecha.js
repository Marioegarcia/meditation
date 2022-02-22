import moment from 'moment';
import {useEffect, useState} from 'react';

export const useFecha = () => {
    const [mensaje, setMensaje] = useState('');

    const formatFecha = (fecha, formato) => {
        return moment.unix(fecha).format(formato);
    };

    const horaActual = () => {
        const hora = moment().format('HH');

        if (hora < 12) {
            setMensaje('Buenos Dias');
        } else if (hora >= 12 && hora <= 19) {
            setMensaje('Buenas Tarde');
        } else {
            setMensaje('Buenas Noches');
        }
    };

    const comparaFecha = data => {
        data.sort((a, b) => {
            if (moment(a.finObjetivo).isSame(b.finObjetivo)) {
                return 0;
            }
            if (moment(a.finObjetivo).isSameOrBefore(b.finObjetivo)) {
                return -1;
            }
            return 1;
        });

        data.sort((a, b) => {
            if (a.done == b.done) {
                return 0;
            }
            if (a.done < b.done) {
                return -1;
            }
            return 1;
        });

        return data;
    };

    useEffect(() => {
        horaActual();
    }, []);

    return {
        formatFecha,
        mensaje,
        comparaFecha,
    };
};
