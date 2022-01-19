import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthContext';
import AppNav from '../navigation/AppNav';
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
        // <AppNav/>
        <StackApp/>
    )
}

export default Home


