import axios from 'axios';


const apiDB = axios.create({
    baseURL: 'http://192.168.1.12:8080/api',
    // params: {
    //     api_key: '1865f43a0549ca50d341dd9ab8b29f49',
    //     language: 'es-ES'
    // }
});


export default apiDB;