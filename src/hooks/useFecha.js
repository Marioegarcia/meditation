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

    const comparaFecha = (a,b) => {
        let t = moment(1651380746).isSameOrBefore(1651380746)
        console.log(t);
        return t;
    }

    useEffect(() => {
      horaActual();
      
    }, []);
    

    return {
        formatFecha,
        mensaje,
        comparaFecha,
    }

}