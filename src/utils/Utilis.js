import { colores } from '../theme/appTheme'



export const emociones = [ 
    {
        name: 'Feliz',
        value:0,
        img: require('../assets/img/emotions/feliz.png'),
        colores: colores.alegria
    },
    {
        name: 'Indiferente',
        value:1,
        img: require('../assets/img/emotions/indiferente.png'),
        colores: colores.indefinido
       
    },
    {
        name: 'Triste',
        value:2,
        img: require('../assets/img/emotions/triste.png') ,
        colores: colores.tristeza
    },
    {
        name: 'Desagrado',
        value:3,
        img: require('../assets/img/emotions/desagrado.png'),
        colores: colores.desagrado
    },
    {
        name: 'Miedo',
        value:4,
        img: require('../assets/img/emotions/miedo.png'),
        colores: colores.miedo
    },
    {
        name: 'Enojo',
        value:5,
        img: require('../assets/img/emotions/enojo.png'),
        colores: colores.enojo
    },
]