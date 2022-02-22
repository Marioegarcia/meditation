import {useCallback, useContext, useState} from 'react';

import { TaskContext } from '../context/TaskContext';

export const useNoToDo = (navigation) => {

    const {deleteNotToDo,upDateDone} = useContext(TaskContext)

    const [selection, setSelection] = useState(false)
    const [data, setData] = useState({})
    const [reload, setReload] = useState();
    

  

    const newTodo = () => {
        navigation.navigate('NewNotToDo',{data:false});
    };


    const cambioTarea = (data) => {
       

       const {id,done} = data;
        if (done === 0) {
            upDateDone(id,1)

            // getNotToDo()
        } else {
            upDateDone(id,0)
            // getNotToDo()
        }
        
        setReload(!reload)
    }

    const openBarra = (value) => {
        
        setData(value)
        cambioHeader(true);
       
    }

    const goBack = () =>{
        setData({})
        // setSelection(false);
        cambioHeader(false);
        
    }

    const deleteItem = () => {
        deleteNotToDo(data.id);
        // getNotToDo();
        cambioHeader(false);
    }

    const updateItem = () => {
        
        navigation.navigate('NewNotToDo',{
            data
        });
        cambioHeader(false);
       

    }

    

    
    
    const cambioHeader = useCallback( (valor)=>{
       
       
        setSelection( valor )
    },[setSelection] )
  
  

    


    

    
    
    return {

        newTodo,
        cambioTarea,
        openBarra,
        goBack,
        deleteItem,
        updateItem,
        cambioHeader,
        selection,
       
       
    };
};


    // const getNotToDo =  () => {
    //     let results = [];

    //     db.transaction( txn => {
         
    //       setIsloading(false);
    //          txn.executeSql(
    //             `SELECT * FROM NoToDoList ORDER BY id DESC`,
    //             [],
    //             (sqlTxn, res) => {
    //                 let len = res.rows.length;
                    
    //                 if (len > 0) {
                       
    //                     for (let i = 0; i < len; i++) {
    //                         // console.log(res.rows.item(i));
    //                         results.push(res.rows.item(i));
    //                     }
    //                     setIsloading(true);

    //                     return results;
                        
    //                 } else {
    //                     setIsloading(true);
                        
    //                     return results = [];
                        
    //                 }
                    
    //             },
    //             error => {
    //                 console.log('error on getting categories ' + error.message);
    //                 setIsloading(true);
    //                 return false;
    //             },
    //         );
    //     });

    //     // console.log(results);
    //     // console.log('antes de acabar getTodo');
    //     return results;
        
    // };

    // const crearNotTask = async data => {
    //     const {todo, tipo, fecha, done} = data;
        
    //     await db.transaction(txn => {
    //       setIsloading(false);
    //         txn.executeSql(
    //             `INSERT INTO NoToDoList (todo , tipo , fecha ,done) VALUES (?,?,?,?)`,
    //             [todo, tipo, fecha, done],
    //             (sqlTxn, res) => {
                  
    //               Alert.alert('Tarea creada existosamente');
                    
    //             },
    //             error => {
    //                 console.log('error  ' + error.message);
                    
    //             },
    //         );
    //         setIsloading(true);
    //     });

        

        
    // };

    // const deleteNotToDo = id => {
    //     db.transaction(txn => {
    //         txn.executeSql(
    //             `DELETE from NoToDoList where rowid = ${id}`,
    //             [],
    //             (sqlTxn, res) => {
    //               Alert.alert('Eliminado correctamente');
    //             },
    //             error => {
    //                 console.log('error on adding category ' + error.message);
    //                 return false;
    //             },
    //         );
    //     });
    // };

    // const upDateTodo = async (id, todo, tipo) => {
    //     setIsloading(false);
    //     await db.transaction(async(tx) => {
    //         await tx.executeSql(
    //             'UPDATE NoToDoList set todo=?, tipo=?  where id=?',
    //             [todo, tipo, id],
    //             (tx, results) => {
    //                 if (results.rowsAffected > 0) {
    //                     Alert.alert('Actualizado correctamente');
    //                     recarga();
    //                     return true;
    //                 } else Alert.alert('Error');
    //             },
    //         );
    //     });

       
    //     setIsloading(true);
    // };

    // const upDateDone =  (id,  done) => {
    //     setIsloading(false);
        
    //      db.transaction((tx) => {
    //          tx.executeSql(
    //             'UPDATE NoToDoList set done=?  where id=?',
    //             [done, id],
    //             (tx, results) => {
    //                 if (results.rowsAffected > 0) {

    //                     console.log('Actualizado correctamente');
                       
    //                 } else Alert.alert('Error');
    //             },
    //         );
    //     });

       
    //     setIsloading(true);
    // };