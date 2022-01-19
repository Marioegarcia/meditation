import React from 'react';
import {View} from 'react-native';

import Titulos from '../../components/Titulos';
import { windowWidth } from '../../utils/Dimentions';

const ItemSlide = ({item}) => {
    return (
        <View style={{width: windowWidth, paddingHorizontal:10}}>
            <View style={{height: 40, marginTop: 25,marginBottom:30, alignItems:'center'}}>
                <Titulos texto={item.title} />
            </View>

            <View
                style={{
                    // paddingHorizontal: 30,
                }}>
                <Titulos texto={item.ask} />

                {item.component}
            </View>

            
        </View>
    );
};

export default ItemSlide;
