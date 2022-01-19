import React,{ createContext, useEffect, useReducer,useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
import { authReducer, AuthState } from "./authReducer";



export const db = SQLite.openDatabase(
    {
        name: 'DiarioDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);





const authInicialState = {
    status:'checking',
    nombre: null, 
    errorMessage: ''
}





export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, authInicialState,);
    const [entradas, setEntradas] = useState([]);
    useEffect(() => {
       checkToken();
    }, []);

    useEffect(() => {
        createTable();
       
    }, [])

    useEffect(() => {
        getData()
    }, [])

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('nombre');
        //No hay token autenticado
        if(!token) return dispatch({type:'notAuthenticated'});

        dispatch({
            type:'signUp',
            payload:{
                nombre: token
            }
        })
    }

    const login = async ( inputTexto ) => {
        try {
            await AsyncStorage.setItem('nombre',inputTexto);
            checkToken();
        } catch (error) {
            console.log(error);
        }
    }

    const logOut = async() => {
        await AsyncStorage.removeItem('nombre');
        dispatch({type:'logout'})
    };

    const createTable = () => {
        db.transaction((tx) => {
            // tx.executeSql("DROP TABLE IF EXISTS DiarioEntradas")
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "DiarioEntradas "
                + "(id INTEGER PRIMARY KEY AUTOINCREMENT, situacion TEXT, pensamiento TEXT, emocion INTEGER,respuesta Text,sugerencia Text,fecha INTEGER);"
            )
        })

        
       
        
    }
  

    const getData = () => {
        
        try {
        
            db.transaction(txn => {
                txn.executeSql(
                  `SELECT * FROM DiarioEntradas ORDER BY id DESC`,
                  [],
                  (sqlTxn, res) => {
                   
                    let len = res.rows.length;
                    
                    if (len > 0) {
                        let results = [];
                        for (let i = 0; i < len; i++) {
                            
                            results.push(res.rows.item(i));
                            
                        }
                        
                        setEntradas(results)
                    }else {
                        setEntradas([])
                    }
                  },
                  error => {
                    console.log("error on getting categories " + error.message);
                  },
                );
            });

        } catch (error) {
            console.log(error);
        }
    }

    const insertData = (data) => {
        const {situacion , pensamiento , emocion ,respuesta,sugerencia ,fecha} = data;
       

        db.transaction(txn => {
            txn.executeSql(
              `INSERT INTO DiarioEntradas (situacion , pensamiento , emocion ,respuesta,sugerencia ,fecha ) VALUES (?,?,?,?,?,?)`,
              [situacion , pensamiento , emocion ,respuesta,sugerencia ,fecha],
              (sqlTxn, res) => {
                console.log(`added successfully`);
              },
              error => {
                console.log("error on adding category " + error.message);
              },
            );
          });
     
    
    }

    const eliminarRegistro = (id) => {
        
        db.transaction(txn => {
            txn.executeSql(
              `DELETE from DiarioEntradas where rowid = ${id}`,
              [],
              (sqlTxn, res) => {
                return true;
              },
              error => {
                console.log("error on adding category " + error.message);
                return false;
              },
            );
          });
    }
    
    const updateRegistro = (data) => {
        const {situacion , pensamiento , emocion ,respuesta,sugerencia ,id} = data;
        db.transaction((tx) => {
            tx.executeSql(
              'UPDATE DiarioEntradas set situacion=?, pensamiento=?, emocion=?,respuesta=?, sugerencia=? where id=?',
              [situacion , pensamiento , emocion ,respuesta,sugerencia,id],
              (tx, results) => {
                console.log( 'results');
                if (results.rowsAffected > 0) {
                  Alert.alert('Record Updated Successfully...')
                } else Alert.alert('Error');
              }
            );
        });
    }

    

    return (
        <AuthContext.Provider
        value={{
            ...state,
            login,
            logOut,
            checkToken,
            insertData,
            getData,
            entradas,
            eliminarRegistro,
            updateRegistro
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}