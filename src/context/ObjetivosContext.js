import React, {createContext, useEffect, useReducer, useState} from 'react';
import { useFecha } from '../hooks/useFecha';

import {db} from './AuthContext';
import { objetivoReducer } from './objetivoReducer';


const objetivoInicialState = {
    status: 'checking',
    objetivos: null,
    errorMessage: '',
};

export const ObjetivosContext = createContext({});

export const ObjetivosProvider = ({children}) => {
    const {comparaFecha} = useFecha();
    const [state, dispatch] = useReducer(objetivoReducer, objetivoInicialState);

    useEffect(() => {
        createTable();
    }, []);

    useEffect(() => {
        getObjetivos()
    }, [])
    
    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Objetivos"
                + "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, finObjetivo INTEGER, done NUMERIC, plazo TEXT, ambito TEXT,codigo INTEGER );"
            )
        })
    };

    const getObjetivos = () => {
        let results = [];

        db.transaction(txn => {
            txn.executeSql(
                `SELECT * FROM Objetivos ORDER BY id DESC`,
                [],
                (sqlTxn, res) => {
                    let len = res.rows.length;

                    if (len > 0) {
                        for (let i = 0; i < len; i++) {
                            // console.log(res.rows.item(i));
                            results.push(res.rows.item(i));
                        }

                        dispatch({
                            type:'getObjetivos',
                            payload: comparaFecha(results)
                        })
                    } else {
                        dispatch({
                            type:'voidObjetivos',
                        
                        })
                    }
                },
                error => {
                    console.log('error on getting categories ' + error.message);

                    return false;
                },
            );
        });
    }

    const crearObjetivo = (data) => {
        const {
            titulo,
            finObjetivo,
            done,
            ambito,
            codigo
        } = data;
        

        db.transaction(txn => {
            txn.executeSql(
                `INSERT INTO Objetivos (titulo , finObjetivo , done ,ambito,codigo ) VALUES (?,?,?,?,?)`,
                [titulo , finObjetivo , done ,ambito,codigo],
                (sqlTxn, res) => {
                    console.log(res);
                    getObjetivos();
                    Alert.alert('Tarea creada existosamente');
                },
                error => {
                    console.log('error  ' + error.message);
                },
            );
        });
    }

    const eliminarObjetivo = (id) => {
        
        db.transaction(txn => {
            txn.executeSql(
                `DELETE from Objetivos where rowid = ${id}`,
                [],
                (sqlTxn, res) => {
                    getObjetivos();
                    Alert.alert('Eliminado correctamente');
                },
                error => {
                    console.log('error on adding category ' + error.message);
                    return false;
                },
            );
        });
    }

    const updateobjetivo = (data) => {
        
        const {id,ambito,finObjetivo,titulo} = data;
       
       
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE Objetivos set ambito=? ,finObjetivo=? ,titulo=?  where id=?',
                [ambito,finObjetivo,titulo, id],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                        getObjetivos();
                        Alert.alert('Actualizado correctamente');
                        
                        
                    } else Alert.alert('Error');
                },
            );
        });
    }

    const updateDone = (id,done) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE Objetivos set done=?  where id=?',
                [done, id],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                        getObjetivos();
                        Alert.alert('Actualizado correctamente');
                        
                        
                    } else Alert.alert('Error');
                },
            );
        });
    }
    
    return (
        <ObjetivosContext.Provider
            value={{
                ...state,
                crearObjetivo,
                eliminarObjetivo,
                updateobjetivo,
                updateDone
            }}>
            {children}
        </ObjetivosContext.Provider>
    );
};
