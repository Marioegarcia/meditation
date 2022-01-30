import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { useFecha } from '../../hooks/useFecha'
import { adjust } from '../../utils/Dimentions'


const FechaSelect = ({ruedas,setView}) => {
    const {formatFecha} = useFecha();
    const fechaInit = ruedas[0].fecha;
   
    

    return (
        <View style={styles.container} >
            
            <SelectDropdown
            data={ruedas}
    
            onSelect={(selectedItem, index) => {
                setView(index);
            }}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                 
                  <Text style={styles.dropdown3BtnTxt}>
                    {selectedItem ? formatFecha(selectedItem.fecha,'LL') : formatFecha(fechaInit,'LL') }
                  </Text>
                  <Icon name='expand-more' size={20} />
                </View>
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                  
                  <Text style={styles.dropdown3RowTxt}>{ formatFecha(item.fecha, 'DD - MMMM - YYYY') }</Text>
                </View>
              );
            }}
          />
        </View>
    )
}

export default FechaSelect

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:20
    },
    dropdown3BtnStyle:{
        width: "80%",
        height: 42,
        backgroundColor: "#FFF",
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#444",

    },
    dropdown3BtnChildStyle:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
    },
    dropdown3BtnTxt: {
        color: "#444",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: adjust(15),
        marginHorizontal: 12,
    },
    dropdown3DropdownStyle:{
        backgroundColor: "rgba(46, 52, 64, 1)"
    },
    dropdown3RowStyle:{
        backgroundColor: "rgba(46, 52, 64, 1)",
        borderBottomColor: "#444",
        height: 50,
    },
    dropdown3RowChildStyle:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 18,
    },
    dropdown3RowTxt:{
        color: "#F1F1F1",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: adjust(15),
        marginHorizontal: 12,
    }


})
