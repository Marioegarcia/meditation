import React, { useContext } from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { AuthContext } from '../../context/AuthContext';

const SettingsScreen = () => {
    const {logOut} = useContext(AuthContext);
    
    

    return (
        <View>
            <Text>SettingsScreen</Text>
            <Button
            title='logout'
            onPress={logOut}
            />
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})
