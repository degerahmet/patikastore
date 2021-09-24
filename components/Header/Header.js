
import React from 'react';
import {View,Text,TouchableOpacity,Image, TextInput} from 'react-native'

import styles from './Header.style';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>PATIKASTORE</Text>
            <TextInput 
                style={styles.input}
                placeholder="Ara..."
            />
            
        </View>
    );
};
export default Header;