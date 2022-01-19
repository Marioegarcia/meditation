import { useEffect, useState } from "react";
import { db } from "../context/AuthContext";


export const useRueda = () => {
    const [ruedas, setRuedas] = useState(['']);


    const getRueda = () => {
        
        try {
        
            db.transaction(txn => {
                txn.executeSql(
                  `SELECT * FROM RuedaDeVida ORDER BY id DESC`,
                  [],
                  (sqlTxn, res) => {
                   
                    let len = res.rows.length;
                    
                    if (len > 0) {
                        let results = [];
                        for (let i = 0; i < len; i++) {
                            // console.log(res.rows.item(i));
                            results.push(res.rows.item(i));
                            
                        }
                        
                        setRuedas(results);
                    }else {
                        setRuedas([]);
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

    const saveRueda = (data) => {
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
              },
              error => {
                console.log("error  " + error.message);
              },
            );
        });
     
    
    }





    useEffect(() => {
        getRueda()
    }, [])

    return {
        saveRueda,
        getRueda,
        ruedas,
        
    }
}