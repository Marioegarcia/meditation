import React, {createContext, useEffect, useReducer, useState} from 'react';

import {db} from './AuthContext';
import { taskReducer } from './taskReducer';

const taskInicialState = {
    status: 'checking',
    noToDo: null,
    errorMessage: '',
};

export const TaskContext = createContext({});

export const TaskProvider = ({children}) => {

    const [state, dispatch] = useReducer(taskReducer, taskInicialState);

    useEffect(() => {
        createTable();
    }, []);

    useEffect(() => {
        getNotToDo()
    }, [])
    
    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS ' +
                    'NoToDoList' +
                    '(id INTEGER PRIMARY KEY AUTOINCREMENT, todo TEXT, tipo INTEGER, fecha INTEGER,done NUMERIC);',
            );
        });
    };

    const getNotToDo = () => {
        let results = [];

        db.transaction(txn => {
            txn.executeSql(
                `SELECT * FROM NoToDoList ORDER BY id DESC`,
                [],
                (sqlTxn, res) => {
                    let len = res.rows.length;

                    if (len > 0) {
                        for (let i = 0; i < len; i++) {
                            // console.log(res.rows.item(i));
                            results.push(res.rows.item(i));
                        }

                        dispatch({
                            type:'getTask',
                            payload: results
                        })
                    } else {
                        dispatch({
                            type:'voidTask',
                        
                        })
                    }
                },
                error => {
                    console.log('error on getting categories ' + error.message);

                    return false;
                },
            );
        });

        
        // console.log(results);
        // console.log('antes de acabar getTodo');
    };

    const crearNotTask =  (data) => {
        
        const {todo, tipo, fecha, done} = data;

        db.transaction(txn => {
            txn.executeSql(
                `INSERT INTO NoToDoList (todo , tipo , fecha ,done) VALUES (?,?,?,?)`,
                [todo, tipo, fecha, done],
                (sqlTxn, res) => {
                    getNotToDo();
                    Alert.alert('Tarea creada existosamente');
                },
                error => {
                    console.log('error  ' + error.message);
                },
            );
        });
    };

    const deleteNotToDo = id => {
        db.transaction(txn => {
            txn.executeSql(
                `DELETE from NoToDoList where rowid = ${id}`,
                [],
                (sqlTxn, res) => {
                    getNotToDo();
                    Alert.alert('Eliminado correctamente');
                },
                error => {
                    console.log('error on adding category ' + error.message);
                    return false;
                },
            );
        });
    };

    const upDateTodo = (id, todo, tipo) => {
        
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE NoToDoList set todo=?, tipo=?  where id=?',
                [todo, tipo, id],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                        getNotToDo();
                        Alert.alert('Actualizado correctamente');
                        
                        
                    } else Alert.alert('Error');
                },
            );
        });
    };

    const upDateDone = (id, done) => {
        
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE NoToDoList set done=?  where id=?',
                [done, id],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                        getNotToDo();
                        console.log('Actualizado correctamente');
                    } else Alert.alert('Error');
                },
            );
        });
    };

    const eliminarTablaTask = () => {
        db.transaction((tx) => {
            tx.executeSql("DROP TABLE IF EXISTS NoToDoList");
        })
        dispatch({type:'Delete'});
        createTable();
    }

    return (
        <TaskContext.Provider
            value={{
                ...state,
      
                getNotToDo,
                crearNotTask,
                deleteNotToDo,
                upDateTodo,
                upDateDone,
                eliminarTablaTask
                
            }}>
            {children}
        </TaskContext.Provider>
    );
};
