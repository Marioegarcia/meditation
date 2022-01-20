import React, {createContext, useEffect, useReducer, useState} from 'react';

import {db} from './AuthContext';
import { objetivoReducer } from './objetivoReducer';


const objetivoInicialState = {
    status: 'checking',
    objetivos: null,
    errorMessage: '',
};

export const ObjetivosContext = createContext({});

export const ObjetivosProvider = ({children}) => {
   
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
                            payload: results
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
            plazo,
            ambito,
            codigo
        } = data;
        

        db.transaction(txn => {
            txn.executeSql(
                `INSERT INTO Objetivos (titulo , finObjetivo , done ,plazo,ambito,codigo ) VALUES (?,?,?,?)`,
                [titulo , finObjetivo , done ,plazo,ambito,codigo],
                (sqlTxn, res) => {
                    getObjetivos();
                    Alert.alert('Tarea creada existosamente');
                },
                error => {
                    console.log('error  ' + error.message);
                },
            );
        });
    }

    return (
        <ObjetivosContext.Provider
            value={{
                ...state,
                crearObjetivo
                
            }}>
            {children}
        </ObjetivosContext.Provider>
    );
};
