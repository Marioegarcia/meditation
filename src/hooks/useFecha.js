import moment from 'moment';
import { useEffect, useState } from 'react';


export const useFecha = () => {
    const [mensaje, setMensaje] = useState('');

    const formatFecha = ( fecha, formato ) => {
        return moment.unix(fecha).format(formato);
    }

    const horaActual = ()=> {
        const hora = moment().format('HH');
        
        if (hora < 12) {
            setMensaje('Buenos Dias')
        }else if (hora >= 12 && hora <= 19) {
            setMensaje('Buenas Tarde')
        }else{
            setMensaje('Buenas Noches') 
        }
    }

    useEffect(() => {
      horaActual();
    }, []);
    

    return {
        formatFecha,
        mensaje
    }

}