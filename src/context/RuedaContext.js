import React, {createContext, useEffect, useReducer, useState} from 'react';

import {db} from './AuthContext';
import { ruedaReducer } from './ruedaReducer';


const ruedaInicialState = {
    status: 'checking',
    ruedas: null,
    errorMessage: '',
};

export const RuedaContext = createContext({});

export const RuedaProvider = ({children}) => {

    const [state, dispatch] = useReducer(ruedaReducer, ruedaInicialState);

    useEffect(() => {
        createTable();
    }, []);

    useEffect(() => {
        getRueda()
    }, [])
    
    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "RuedaDeVida"
                + "(id INTEGER PRIMARY KEY AUTOINCREMENT, crecimientoPersonal INTEGER, familia INTEGER, salud INTEGER,amistad INTEGER,trabajoEstudios INTEGER,amorSexo INTEGER,economia INTEGER,espiritual INTEGER,fecha INTEGER);"
            )
        })
    };

    const getRueda = () => {
        let results = [];

        db.transaction(txn => {
            txn.executeSql(
                `SELECT * FROM RuedaDeVida ORDER BY id DESC`,
                [],
                (sqlTxn, res) => {
                    let len = res.rows.length;

                    if (len > 0) {
                        for (let i = 0; i < len; i++) {
                            // console.log(res.rows.item(i));
                            results.push(res.rows.item(i));
                        }

                        dispatch({
                            type:'getRueda',
                            payload: results
                        })
                    } else {
                        dispatch({
                            type:'voidRueda',
                        })
                    }
                },
                error => {
                    console.log('error on getting categories ' + error.message);

                    return false;
                },
            );
        });

        
       
    };

    const crearRueda =  (data) => {
        const { 
            crecimientoPersonal ,
            familia,
            salud,
            amistad,
            trabajoEstudios,
            amorSexo,
            economia,
            espiritual,
            fecha
        } = data;
        
       
        db.transaction(txn => {
            txn.executeSql(
              `INSERT INTO RuedaDeVida (crecimientoPersonal , familia , salud ,amistad ,trabajoEstudios ,amorSexo ,economia,espiritual, fecha) VALUES (?,?,?,?,?,?,?,?,?)`,
              [crecimientoPersonal , familia , salud ,amistad ,trabajoEstudios ,amorSexo ,economia,espiritual, fecha],
              (sqlTxn, res) => {
                console.log(res);
                getRueda();
              },
              error => {
                console.log("error  " + error.message);
              },
            );
        });
    };

    const deleteRueda = id => {
        db.transaction(txn => {
            txn.executeSql(
                `DELETE from RuedaDeVida where rowid = ${id}`,
                [],
                (sqlTxn, res) => {
                    getRueda();
                    Alert.alert('Eliminado correctamente');
                },
                error => {
                    console.log('error on adding category ' + error.message);
                    return false;
                },
            );
        });
    };

    const upDateTodo = (data) => {
        const { 
            id,
            crecimientoPersonal ,
            familia,
            salud,
            amistad,
            trabajoEstudios,
            amorSexo,
            economia,
            espiritual,
           
        } = data;
        
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE RuedaDeVida set crecimientoPersonal=?,familia=?,salud=?,amistad=?,trabajoEstudios=?,amorSexo=?,economia=?,espiritual=?  where id=?',
                [crecimientoPersonal,familia,salud,amistad,trabajoEstudios,amorSexo,economia,espiritual, id],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                        getRueda();
                        Alert.alert('Actualizado correctamente');
                        
                        
                    } else Alert.alert('Error');
                },
            );
        });
    };

    
    
    return (
        <RuedaContext.Provider
            value={{
                ...state,
                getRueda,
                crearRueda,
                deleteRueda,
                upDateTodo,
                // upDateTodo,
                // upDateDone,
                
            }}>
            {children}
        </RuedaContext.Provider>
    );
};
