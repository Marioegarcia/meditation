import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthContext';
import { Login } from '../navigation/Login'
import { StackApp } from '../navigation/StackApp';



const Home = () => {
    const {status} = useContext(AuthContext);
    
    if (status === 'not-authenticated') {
        return (
            <Login/>
        )
    }
    return (
       
        <StackApp/>
    )
}

export default Home


