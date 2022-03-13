import React from 'react'
import { Alert, StyleSheet } from 'react-native';



export const NotificacionAlerta = ({textAlert}) => {

        Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
            text: "Cancel",
            onPress: () => Alert.alert("Cancel Pressed"),
            style: "cancel",
            },
        ],
        {
            cancelable: true,
            onDismiss: () =>
            Alert.alert(
                "This alert was dismissed by tapping outside of the alert dialog."
            ),
        }
        );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
      },
})