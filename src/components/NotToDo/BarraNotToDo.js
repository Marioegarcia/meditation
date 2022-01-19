import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';



const BarraNotToDo = ({goBack,deleteItem,updateItem,setCambioColor}) => {
   
   
    return (
        <View style={styles.contenedor} >
           
           <Icon
                name='arrow-back'
                size={26}
                onPress={() => { 
                    setCambioColor('')
                    goBack()
                }  }
                />

      
                    <View style={styles.iconosRight} >
                    
                        <View style={styles.icon} >
                            <Icon
                            name='delete'
                            size={25}
                            onPress={()=> {
                                setCambioColor('')
                                deleteItem()
                            }}
                            />
                        </View>

                        <View style={styles.icon}>
                            <Icon
                            name='edit'
                            size={25}
                            onPress={ () => { 
                                setCambioColor('')
                                updateItem()
                           } }
                            />
                        </View>
                            

                            
                       
                    </View>
              


        </View>
    )
}

export default BarraNotToDo

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 20,
        marginTop:2,
        padding:15
    },
    iconosRight:{
        flexDirection:'row',
        justifyContent:'space-between',   
    },
    icon:{
        marginLeft:40
    }

})


