import moment from 'moment';


export const useFecha = () => {
    
    const formatFecha = ( fecha, formato ) => {

        return moment.unix(fecha).format(formato);
    }

    return {
        formatFecha,
    }

}