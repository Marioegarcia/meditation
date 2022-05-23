import { colores } from '../theme/appTheme'
import AsyncStorage from '@react-native-async-storage/async-storage';


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

export const frases = [
    {
        nota:'El único modo de hacer un gran trabajo es amar lo que haces',
        autor:'Steve Jobs'
    },
    {
        nota:'Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo',
        autor:'Michael Jordan'
    },
    {
        nota:'El dinero no es la clave del éxito; la libertad para poder crear lo es',
        autor:'Nelson Mandela'
    },
    {
        nota:'Cuanto más duramente trabajo, más suerte tengo',
        autor:'Gary Player'
    },
    {
        nota:'La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica',
        autor:'Aristóteles'
    },
    {
        nota:'El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu',
        autor:'Helena Rubinstein '
    },
    {
        nota:'Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan',
        autor:'Elon Musk'
    },
    {
        nota:'Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida',
        autor:'Confucio'
    },
    {
        nota:'Sé el cambio que quieres ver en el mundo',
        autor:'Mahatma Gandhi'
    },
    {
        nota:'No se trata de si van a derribarte, se trata de si vas a levantarte cuando lo hagan',
        autor:'Vince Lombardi'
    },
    {
        nota:'Nadie puede hacerte sentir inferior sin tu consentimiento',
        autor:'Eleanor Roosevelt'
    },
    {
        nota:'Qué maravilloso es que nadie tenga que esperar ni un segundo para empezar a mejorar el mundo',
        autor:'Ana Frank'
    },
    {
        nota:'Tu futuro depende de lo que hagas hoy, no mañana',
        autor:'Anonimo'
    }
]



export const getSentimiento = async() => {
    const sentimiento =  await AsyncStorage.getItem('sentimiento');
    return sentimiento;
}   